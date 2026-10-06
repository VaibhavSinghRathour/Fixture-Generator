import mongoose, { Schema, Document } from "mongoose";

export interface IParticipant extends Document {
  tournamentId: mongoose.Types.ObjectId;
  type: "player" | "pair" | "team";
  name: string;
  members: string[];
}

const participantSchema = new Schema<IParticipant>(
  {
    tournamentId: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["player", "pair", "team"],
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    members: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Participant = mongoose.model<IParticipant>(
  "Participant",
  participantSchema
);

export default Participant;