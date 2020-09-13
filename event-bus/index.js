const express = require("express");
const bodyParser = require("body-parser");
const { default: Axios } = require("axios");

const app = express();
app.use(bodyParser.json());
const events = [];
app.post("/events", async (req, res) => {
  const event = req.body;
  events.push(event);
  await Axios.post("http://posts-clusterip-srv:4000/events", event);
  await Axios.post("http://comments-srv:4001/events", event);
  await Axios.post("http://query-srv:4002/events", event);
  await Axios.post("http://moderation-srv:4003/events", event);
  res.send({ status: "OK" });
});
app.get("/events", async (req, res) => {
  res.send(events);
});
app.listen(4005, () => console.log("server started on port 4005"));
