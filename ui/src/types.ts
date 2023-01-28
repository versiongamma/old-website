export type ImgurAPIResponse = {
  data: { title: string; link: string; images: ImgurAPIPhoto[] };
  status: number;
  success: boolean;
};

export type ImgurAPIPhoto = {
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

export type YouTubeAPIVideoDetailItem = {
  name: string;
  timestamp: string;
  link?: string;
};

export type YouTubeAPIVideoDetails = {
  _id: string;
  videoId: string;
  description: string;
  references: YouTubeAPIVideoDetailItem[];
  music: YouTubeAPIVideoDetailItem[];
};

export type PageData = {
  name: string;
  href: string;
  backgroundImage: string;
  component: (props: { pageData: PageData }) => JSX.Element | null;
};
