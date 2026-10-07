import { Router } from "express";
import {
  createParticipant,
  getParticipantsByTournament,
  updateParticipant,
  deleteParticipant,
} from "../controllers/participant.controller.js";

const router = Router();

router.post("/", createParticipant);

router.get(
  "/tournament/:tournamentId",
  getParticipantsByTournament
);

router.put("/:participantId", updateParticipant);

router.delete("/:participantId", deleteParticipant);

export default router;