type Sport =
  | "badminton"
  | "volleyball"
  | "basketball"
  | "football"
  | "table-tennis";

type ParticipantType = "player" | "pair" | "team";

const allowedParticipantTypes: Record<Sport, ParticipantType[]> = {
  badminton: ["player", "pair", "team"],
  volleyball: ["team"],
  basketball: ["team"],
  football: ["team"],
  "table-tennis": ["player", "pair", "team"],
};

export const isValidParticipantType = (
  sport: Sport,
  participantType: ParticipantType
): boolean => {
  return allowedParticipantTypes[sport].includes(participantType);
};