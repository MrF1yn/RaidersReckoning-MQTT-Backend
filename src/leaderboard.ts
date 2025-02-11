import { Router } from "express";
import { mqttConnect } from "./mqttConnector";
import { DataType } from "./type";

const currentData: DataType[] = [];
const router = Router();

mqttConnect((data) => {
  const dataReceived = JSON.parse(data);
  currentData.push(dataReceived);
});

router.get("/leaderboard", (req, res) => {
  res.json(currentData);
});

export default router;
