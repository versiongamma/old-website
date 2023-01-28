import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("You've reached the home of the server. Do you mean to be here?");
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
