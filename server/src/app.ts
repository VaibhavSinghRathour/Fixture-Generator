import express from "express";
import healthRouter from "./routes/health.routes.js";
import tournamentRouter from "./routes/tournament.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Universal Sports Fixture Generator API is running!");
});

app.use("/api/health", healthRouter);
app.use("/api/tournaments", tournamentRouter);

export default app;