import { THairGoal } from "../interfaces/hair.interface";

export const HAIR_GOAL_MATCH = new Map<THairGoal, string[]>([
  ["Anti-Dandruff", ["Anti-Dandruff", "Oil Control"]],
  ["Anti-Frizz", ["Damage Remedy", "Strengthen"]],
  ["Color Protection", ["Color Protection"]],
  ["Fix Split Ends", ["Damage Remedy", "Strengthen", "Shine"]],
  ["Hydrate", ["Damage Remedy", "Shine"]],
  ["Nourish Roots", ["Strengthen"]],
  ["Oil Control", ["Oil Control", "Anti-Dandruff"]],
  // ["Reduce Brassiness", ["Color Protection", "Damage Remedy"]],
  ["Rejuvenate", ["Strengthen", "Damage Remedy"]],
  ["Shine", ["Shine"]],
  ["Straighten", ["Strengthen"]],
  ["Thermal Protection", ["Thermal Protection"]],
  ["Volumize", ["Strengthen"]],
]);
