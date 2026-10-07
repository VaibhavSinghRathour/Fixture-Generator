import { Request, Response } from "express";
import Tournament from "../models/Tournament.js";

export const createTournament = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      description,
      sport,
      participantType,
      tournamentFormat,
      rules,
      createdBy,
    } = req.body;

    const tournament = await Tournament.create({
      name,
      description,
      sport,
      participantType,
      tournamentFormat,
      rules,
      createdBy,
    });

    res.status(201).json({
      message: "Tournament created successfully",
      tournament,
    });
  } catch (error) {
    console.error("Error creating tournament:", error);

    res.status(500).json({
      message: "Failed to create tournament",
    });
  }
};

