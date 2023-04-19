import { useMemo, useState } from "react";

import { ImgurAPIResponse, YouTubeAPIVideo } from "../types";

const FETCH_VIDEOS_BY_UPLOAD = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUTxitBg-WrN_xTHKMbAzcIA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
const FETCH_SUBSCRIBERS = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCTxitBg-WrN_xTHKMbAzcIA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

export const usePageData = () => {
  const [subs, setSubs] = useState<number>();
  const [videos, setVideos] = useState<YouTubeAPIVideo[]>();
  const [photos, setPhotos] = useState<ImgurAPIResponse>();

  useMemo(async () => {
    fetch(FETCH_SUBSCRIBERS)
      .then((res) => res.json())
      .then((res) => {
        setSubs(res.items[0].statistics.subscriberCount);
      });

    fetch(FETCH_VIDEOS_BY_UPLOAD)
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      });

    fetch("https://api.imgur.com/3/album/JKELiQA", {
      headers: {
        Authorization: "CLIENT-ID " + process.env.REACT_APP_IMGUR_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
  }, []);

  return { subs, videos, photos };
};
