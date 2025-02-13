import dotenv from "dotenv";
import express from "express";

import leaderboard from "./leaderboard";
import cors, {CorsOptions} from "cors";
dotenv.configDotenv({
  path: ".env",
});

if (!process.env.PORT) {
  throw new Error("PORT is not set");
}

if (!process.env.MQTT_BROKER_URL) {
  throw new Error("MQTT_HOST is not set");
}

const app = express();
const corsOptions: CorsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/", leaderboard);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
