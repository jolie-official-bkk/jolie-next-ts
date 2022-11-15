export const naturalHairTypeArray = ["Straight", "Wavy", "Curly"];
export const hairStructure = ["Fine", "Medium", "Coarse"];
export const scalpMoisture = ["Dry", "Balanced", "Oily"];
export const hairTreat = [
  "Balayage",
  "Bleached",
  "Color",
  "Highlights",
  "Keratin",
  "Perm",
  "Relaxer",
  "None of these",
  "Natural Hair",
];
export const hairGoal = [
  "Anti-Dandruff",
  "Anti-Frizz",
  "Color Protection",
  "Fix Split Ends",
  "Hydrate",
  "Nourish Roots",
  "Oil Control",
  // "Reduce Brassiness",
  "Rejuvenate",
  "Shine",
  "Straighten",
  "Thermal Protection",
  "Volumize",
];

export const formulaName = [
  "Clove Regenerator",
  "Lemon Grass Protection",
  "Marjoram Mix&Match",
  "Peppermint Heat Barrier",
  "Shiny Coconut Oil",
  "Super Macadamia Power",
  "Yellow Lemon Controler",
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

interface IHairCard {
  imageUrl: string;
}

export interface INaturalHairType extends IHairCard {
  description: TNaturalHair;
}

export interface IFormula {
  formulaName: TFormulaName;
  formulaDetail: string;
}
