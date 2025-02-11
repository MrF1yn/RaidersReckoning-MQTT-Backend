# IoT MQTT Project

## Get Started

1. Clone the repository
2. Install dependencies (using `npm install`)
3. Run the project using `npm run dev`

### Objective

Expose an express api which will have a `/leaderboard` route which will return all this stored data.

```json
{
  "bomb_id": 4, // number
  "level": 10, //number
  "completedTime": 12 //number
}
```

You'll have to continuously push this in an array as you receive from [MQTT](https://github.com/mqttjs/MQTT.js) and just send that array as response of the leaderboard
