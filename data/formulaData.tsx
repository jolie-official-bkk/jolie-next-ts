export interface IFormulaData {
  formulaName: string;
  property: string;
  ingredients: string[];
}
export const FormulaData: IFormulaData[] = [
  {
    formulaName: "Clove Regenerator",
    property: "Damage Remedy",
    ingredients: ["clove", "coconut", "bran", "jojoba", "evening primrose"],
  },
  {
    formulaName: "Lemon Grass Protection",
    property: "Anti-Dandruff",
    ingredients: [
      "lemon",
      "evening primrose",
      "sunflower seed",
      "jojoba",
      "moringa",
    ],
  },
  {
    formulaName: "Marjoram Mix&Match",
    property: "Color Protection",
    ingredients: ["marjoram", "moringa", "evening primrose", "rose hip"],
  },
  {
    formulaName: "Peppermint Heat Barrier",
    property: "Thermal Protection",
    ingredients: [
      "peppermint",
      "coconut",
      "avocado",
      "macadamia",
      "grape seed",
    ],
  },
  {
    formulaName: "Shiny Coconut Oil",
    property: "Shine",
    ingredients: ["coconut", "bergamot", "sesame", "bran", "sunflower seed"],
  },
  {
    formulaName: "Super Macadamia Power",
    property: "Strengthen",
    ingredients: [
      "macadamia",
      "tea tree",
      "moringa",
      "jojoba",
      "sunflower seed",
    ],
  },
  {
    formulaName: "Yellow Lemon Controler",
    property: "Oil Control",
    ingredients: ["lemon", "rose hip", "coconut", "sweet almond", "grape seed"],
  },
];
