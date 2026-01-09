export interface FlickrPhoto {
  id: string;
  title: string;
  url: string;
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
  url_l?: string;
  url_c?: string;
  url_m?: string;
  datetaken?: string;
}
