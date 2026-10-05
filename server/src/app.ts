import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Universal Sports Fixture Generator API is running!");
});

export default app;