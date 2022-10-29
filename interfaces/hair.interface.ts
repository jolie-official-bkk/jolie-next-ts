export const naturalHairTypeArray = ["straight", "wawy", "curly"];
export const hairStructure = ["fine", "medium", "coarse"];
export const scalpMoisture = ["dry", "balanced", "oily"];
export const hairTreat = [
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

export const formula = [
  "Orange",
  "Bergamot",
  "Lavender",
  "Sage",
  "Clove",
  "Lemon grass",
  "Lemon",
  "Ylang ylang",
  "Marjoram",
  "Peppermint",
];

export const scent = [
  "Aroma Galore",
  "Aroma Queen",
  "Essence Flair",
  "Fragrance Harmony",
  "Scentaholic",
  "Spice Jasmine",
  "Stunner Fragrances",
  "The Scent Fairy",
];

export type TNaturaHair = typeof naturalHairTypeArray[number];
export type THairStructure = typeof hairStructure[number];
export type TScalpMoisture = typeof scalpMoisture[number];
export type THairTreat = typeof hairTreat[number];
export type THairGoal = typeof hairGoal[number];
export type TFormula = typeof formula[number];
export type TScent = typeof scent[number];

interface IHairItem {
  imageUrl: string;
}

export interface INaturalHairType extends IHairItem {
  description: TNaturaHair;
}
