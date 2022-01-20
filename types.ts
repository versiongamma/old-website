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
