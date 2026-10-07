import { Request, Response } from "express";
import Participant from "../models/Participant.js";
import Tournament from "../models/Tournament.js";
import { isValidParticipantType } from "../utils/participantValidation.js";

export const createParticipant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      tournamentId,
      type,
      name,
      members,
    } = req.body;

    const tournament = await Tournament.findById(tournamentId);

    if (!tournament) {
      res.status(404).json({
        message: "Tournament not found",
      });
      return;
    }

    if (!isValidParticipantType(tournament.sport, type)) {
      res.status(400).json({
        message: `${type} participants are not allowed for ${tournament.sport}`,
      });
      return;
    }

    const participant = await Participant.create({
      tournamentId,
      type,
      name,
      members,
    });

    res.status(201).json({
      message: "Participant created successfully",
      participant,
    });
  } catch (error) {
    console.error("Error creating participant:", error);

    res.status(500).json({
      message: "Failed to create participant",
    });
  }
};

export const getParticipantsByTournament = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { tournamentId } = req.params;

    const participants = await Participant.find({
      tournamentId,
    });

    res.status(200).json({
      message: "Participants fetched successfully",
      participants,
    });
  } catch (error) {
    console.error("Error fetching participants:", error);

    res.status(500).json({
      message: "Failed to fetch participants",
    });
  }
};

export const updateParticipant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { participantId } = req.params;
    const { name, type, members } = req.body;

    const existingParticipant = await Participant.findById(participantId);

    if (!existingParticipant) {
      res.status(404).json({
        message: "Participant not found",
      });
      return;
    }

    const tournament = await Tournament.findById(
      existingParticipant.tournamentId
    );

    if (!tournament) {
      res.status(404).json({
        message: "Tournament not found",
      });
      return;
    }

    if (!isValidParticipantType(tournament.sport, type)) {
      res.status(400).json({
        message: `${type} participants are not allowed for ${tournament.sport}`,
      });
      return;
    }

    existingParticipant.name = name;
    existingParticipant.type = type;
    existingParticipant.members = members;

    await existingParticipant.save();

    res.status(200).json({
      message: "Participant updated successfully",
      participant: existingParticipant,
    });
  } catch (error) {
    console.error("Error updating participant:", error);

    res.status(500).json({
      message: "Failed to update participant",
    });
  }
};

export const deleteParticipant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { participantId } = req.params;

    const participant = await Participant.findByIdAndDelete(
      participantId
    );

    if (!participant) {
      res.status(404).json({
        message: "Participant not found",
      });
      return;
    }

    res.status(200).json({
      message: "Participant deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting participant:", error);

    res.status(500).json({
      message: "Failed to delete participant",
    });
  }
};