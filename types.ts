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

export type VideoDetails = {
  _id: string;
  videoId: string;
  references: {
    description: string;
    url: string;
    timestamp: string;
  }[];
  music: {
    name: string;
    timestamp: string;
  }[];
};
