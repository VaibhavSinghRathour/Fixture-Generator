import mongoose, { Schema, Document } from "mongoose";

export interface ITournament extends Document {
  name: string;
  description?: string;
  sport: "badminton" | "volleyball" | "basketball" | "football" | "table-tennis";
  participantType: "player" | "pair" | "team";
  tournamentFormat: "knockout" | "league" | "league-cum-knockout";
  status: "draft" | "ongoing" | "completed";
  rules: {
    seedingEnabled: boolean;
  };
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const tournamentSchema = new Schema<ITournament>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    sport: {
      type: String,
      required: true,
      enum: [
        "badminton",
        "volleyball",
        "basketball",
        "football",
        "table-tennis",
      ],
    },

    participantType: {
      type: String,
      required: true,
      enum: ["player", "pair", "team"],
    },

    tournamentFormat: {
      type: String,
      required: true,
      enum: ["knockout", "league", "league-cum-knockout"],
    },

    status: {
      type: String,
      enum: ["draft", "ongoing", "completed"],
      default: "draft",
    },

    rules: {
      seedingEnabled: {
        type: Boolean,
        default: false,
      },
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tournament = mongoose.model<ITournament>(
  "Tournament",
  tournamentSchema
);

export default Tournament;