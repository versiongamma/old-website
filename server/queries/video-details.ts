import { connect } from "../connect";

const getVideoDetails = async (id: string) => {
  try {
    const { client, db } = await connect();
    const result = await db
      .collection("VideoDetails")
      .find({ videoId: id })
      .toArray();

    client.close();
    return result[0] ?? {};
  } catch (error) {
    console.error(error);
    return;
  }
};

export default getVideoDetails;
