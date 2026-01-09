import type { FlickrApiResponse, FlickrPhoto } from "~/types/flickr";

export default defineEventHandler(async (event): Promise<FlickrPhoto[]> => {
  const config = useRuntimeConfig();

  const apiKey = config.flickrApiKey;
  const userId = config.flickrUserId;

  if (!apiKey || !userId) {
    console.error("Flickr API credentials not configured");
    throw createError({
      statusCode: 500,
      message: "Flickr API credentials not configured",
    });
  }

  try {
    const fetchPage = (page: number) =>
      $fetch<FlickrApiResponse>("https://api.flickr.com/services/rest/", {
        params: {
          method: "flickr.people.getPublicPhotos",
          api_key: apiKey,
          user_id: userId,
          extras: "url_l,url_c,url_m,date_taken",
          per_page: 500, // Max allowed by Flickr
          page,
          format: "json",
          nojsoncallback: 1,
        },
      });

    // First, fetch the first page to get total number of pages
    const firstResponse = await fetchPage(1);

    if (firstResponse.stat !== "ok") {
      console.error("Flickr API returned non-ok status:", firstResponse.stat);
      return [];
    }

    const totalPages = firstResponse.photos.pages;
    let allPhotos = [...firstResponse.photos.photo];

    // Fetch remaining pages if there are more
    if (totalPages > 1) {
      const pagePromises = Array.from(
        { length: totalPages - 1 },
        (_, i) => fetchPage(i + 2),
      );

      const responses = await Promise.all(pagePromises);
      responses.forEach((response) => {
        if (response.stat === "ok") {
          allPhotos.push(...response.photos.photo);
        }
      });
    }

    // Transform response to simpler format
    const photos = allPhotos
      .map((photo) => ({
        id: photo.id,
        title: photo.title || "Untitled",
        url: photo.url_l || photo.url_c || photo.url_m || "",
        dateTaken: photo.datetaken,
      }))
      .filter((photo) => photo.url) // Filter out photos without URLs
      .sort((a, b) => {
        // Sort by date taken, newest first
        if (!a.dateTaken || !b.dateTaken) return 0;
        return new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime();
      });

    console.log(`Fetched ${photos.length} photos from Flickr`);
    return photos;
  } catch (error) {
    console.error("Flickr API error:", error);
    // Return empty array instead of failing the build
    return [];
  }
});
