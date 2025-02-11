import { connect } from "mqtt";

const client = connect("mqtt://test.mosquitto.org");

export function mqttConnect(callback: (data: string) => unknown) {
  client.on("connect", () => {
    console.log("Connected to MQTT");
  });

  client.on("message", (_topic, message) => {
    // message is Buffer
    callback(message.toString());
    client.end();
  });
}
