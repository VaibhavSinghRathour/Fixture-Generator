import express from "express";
import healthRouter from "./routes/health.routes.js";
import tournamentRouter from "./routes/tournament.routes.js";
import participantRouter from "./routes/participant.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Universal Sports Fixture Generator API is running!");
});

app.use("/api/health", healthRouter);
app.use("/api/tournaments", tournamentRouter);
app.use("/api/participants", participantRouter);

export default app;