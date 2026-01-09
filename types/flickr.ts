export interface FlickrPhoto {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
  dateTaken?: string;
}

export interface FlickrApiResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: FlickrApiPhoto[];
  };
  stat: string;
}

export interface FlickrApiPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  url_c?: string;
  width_c?: number;
  height_c?: number;
  datetaken?: string;
}
