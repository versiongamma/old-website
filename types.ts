export type ImgurAPIResponse = {
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

export type YouTubeAPIVideo = {
  id: string;
  snippet: {
    resourceId: { videoId: string };
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
  };
};

export type YouTubeAPIResponse = {
  items: YouTubeAPIVideo[];
};

export type VideoDetailItem = {
  name: string;
  timestamp: string;
  link?: string;
};

export type VideoDetails = {
  _id: string;
  videoId: string;
  description: string;
  references: VideoDetailItem[];
  music: VideoDetailItem[];
};
