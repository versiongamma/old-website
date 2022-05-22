import type { NextApiRequest, NextApiResponse } from "next";
import getVideoDetails from "../../server/queries/video-details";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  const data = await getVideoDetails(id);
  res.status(200).json(data);
};

export default handler;
