import express from "express";
import healthRouter from "./routes/health.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Universal Sports Fixture Generator API is running!");
});

app.use("/api/health", healthRouter);

export default app;