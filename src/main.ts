import express from "express";
import { DatType } from "./type";

const app = express();
const currentData: DatType[] = [];

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/leaderboard", (req, res) => {
  res.json(currentData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
