export type ImgurApiResponse = {
  data: { title: string; link: string; images: ImgurPhoto[] };
  status: number;
  success: boolean;
};

export type ImgurPhoto = {
  id: number;
  link: string;
  width: number;
  height: number;
  description: string | null;
};

export type YouTubeApiResponse = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
  };
};
