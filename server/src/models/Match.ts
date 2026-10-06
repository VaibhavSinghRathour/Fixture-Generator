import mongoose, { Schema, Document } from "mongoose";

export interface IMatch extends Document {
  tournamentId: mongoose.Types.ObjectId;

  round: string;

  participant1?: mongoose.Types.ObjectId;
  participant2?: mongoose.Types.ObjectId;

  score1?: number;
  score2?: number;

  winner?: mongoose.Types.ObjectId;

  status: "scheduled" | "ongoing" | "completed";

  nextMatchId?: mongoose.Types.ObjectId;
}

const matchSchema = new Schema<IMatch>(
  {
    tournamentId: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },

    round: {
      type: String,
      required: true,
      trim: true,
    },

    participant1: {
      type: Schema.Types.ObjectId,
      ref: "Participant",
    },

    participant2: {
      type: Schema.Types.ObjectId,
      ref: "Participant",
    },

    score1: {
      type: Number,
      min: 0,
    },

    score2: {
      type: Number,
      min: 0,
    },

    winner: {
      type: Schema.Types.ObjectId,
      ref: "Participant",
    },

    status: {
      type: String,
      enum: ["scheduled", "ongoing", "completed"],
      default: "scheduled",
    },

    nextMatchId: {
      type: Schema.Types.ObjectId,
      ref: "Match",
    },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model<IMatch>("Match", matchSchema);

export default Match;