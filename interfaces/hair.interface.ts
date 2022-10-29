export const naturalHairTypeArray = ["straight", "wawy", "curly"];
export const hairStructure = ["fine", "medium", "coarse"];
export const scalpMoisture = ["dry", "balanced", "oily"];
export const hairColorOrTreat = [
  "balayage",
  "bleached",
  "color",
  "highlights",
  "keratin",
  "perm",
  "relaxer",
  "none of these",
  "natural hair",
];
export const hairGoal = [
  "anti-frizz",
  "color protection",
  "curl definition",
  "deep condition",
  "fix split ends",
  "hydrate",
  "lengthen",
  "hourish roots",
  "oil control",
  "reduce brassiness",
  "rejuvenate",
  "replenish hair",
  "shine",
  "soothe scalp",
  "straighten",
  "thermal protection",
  "volumize",
];

export type TNaturaHairAttribute = typeof naturalHairTypeArray[number];

interface IHairItem {
  imageUrl: string;
}

export interface INaturalHairType extends IHairItem {
  description: TNaturaHairAttribute;
}
