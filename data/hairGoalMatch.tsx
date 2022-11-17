import { THairGoal } from "../interfaces/hair.interface";

export const HAIR_GOAL_MATCH = new Map<THairGoal, string[]>([
  ["anti-dandruff", ["Anti-Dandruff", "Oil Control"]],
  ["anti-frizz", ["Damage Remedy", "Strengthen"]],
  ["color protection", ["Color Protection"]],
  ["fix split ends", ["Damage Remedy", "Strengthen", "Shine"]],
  ["hydrate", ["Damage Remedy", "Shine"]],
  ["nourish roots", ["Strengthen"]],
  ["oil control", ["Oil Control", "Anti-Dandruff"]],
  // ["reduce brassiness", ["Color Protection", "Damage Remedy"]],
  ["rejuvenate", ["Strengthen", "Damage Remedy"]],
  ["shine", ["Shine"]],
  ["straighten", ["Strengthen"]],
  ["thermal Protection", ["Thermal Protection"]],
  ["volumize", ["Strengthen"]],
]);
