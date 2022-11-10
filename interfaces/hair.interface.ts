export const naturalHairTypeArray = ["straight", "wavy", "curly"];
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
  "anti-dandruff",
  "anti-frizz",
  "color protection",
  "fix split ends",
  "hydrate",
  "nourish roots",
  "oil control",
  "reduce brassiness",
  "rejuvenate",
  "shine",
  "straighten",
  "thermal protection",
  "volumize",
];

export const formulaName = [
  "Clove regenerator",
  "Lemon grass protection",
  "Marjoram mix&match",
  "Peppermint heat barrier",
  "Shiny coconut oil",
  "Super macadamia power",
  "Yellow lemon controler",
];

// export const formulaDetail

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

export type TNaturalHair = typeof naturalHairTypeArray[number];
export type THairStructure = typeof hairStructure[number];
export type TScalpMoisture = typeof scalpMoisture[number];
export type THairTreat = typeof hairTreat[number];
export type THairGoal = typeof hairGoal[number];
export type TFormulaName = typeof formulaName[number];
export type TScent = typeof scent[number];

interface IHairItem {
  imageUrl: string;
}

export interface INaturalHairType extends IHairItem {
  description: TNaturalHair;
}

export interface IFormula {
  formulaName: TFormulaName;
  formulaDetail: string;
}
