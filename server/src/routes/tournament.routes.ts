import { Router } from "express";
import { createTournament } from "../controllers/tournament.controller.js";

const router = Router();

router.post("/", createTournament);

export default router;