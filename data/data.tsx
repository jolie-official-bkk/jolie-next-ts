export interface IData {
  id?: number;
  name: string;
  en: string;
  th: string;
}

export const naturalHairTypeData: IData[] = [
  {
    name: "straight",
    en: "Straight",
    th: "ผมตรง",
  },
  {
    name: "wavy",
    en: "Wavy",
    th: "ผมหยิก",
  },
  {
    name: "curly",
    en: "Curly",
    th: "ผมหยักศก",
  },
];

export const hairStructureData: IData[] = [
  {
    name: "fine",
    en: "Fine",
    th: "เส้นผมบาง",
  },
  {
    name: "medium",
    en: "Medium",
    th: "เส้นผมปานกลาง",
  },
  {
    name: "coarse",
    en: "Coarse",
    th: "เส้นผมหนา",
  },
];

export const scalpMoistureData: IData[] = [
  {
    name: "dry",
    en: "Dry",
    th: "แห้ง",
  },
  {
    name: "balanced",
    en: "Balanced",
    th: "ธรรมดา",
  },
  {
    name: "oily",
    en: "Oily",
    th: "มัน",
  },
];

export const hairTreatData: IData[] = [
  {
    name: "balayage",
    en: "Balayage",
    th: "บาลายาจ",
  },
  {
    name: "bleached",
    en: "Bleached",
    th: "กัดสีผม/ฟอกผม",
  },
  {
    name: "color",
    en: "Color",
    th: "ผมทำสี",
  },
  {
    name: "highlights",
    en: "Highlights",
    th: "ผมไฮไลท์",
  },
  {
    name: "keratin",
    en: "Keratin",
    th: "เคราติน",
  },
  {
    name: "perm",
    en: "Perm",
    th: "ดัดผม",
  },
  {
    name: "relaxer",
    en: "Relaxer",
    th: "ยืดผม",
  },
  {
    name: "none of these",
    en: "None of these",
    th: "อื่น ๆ",
  },
  {
    name: "natural hair",
    en: "Natural Hair",
    th: "ผมธรรมชาติ",
  },
];

export const hairGoalData: IData[] = [
  {
    name: "anti-dandruff",
    en: "Anti-Dandruff",
    th: "ขจัดรังแค",
  },
  {
    name: "anti-frizz",
    en: "Anti-Frizz",
    th: "ลดผมชี้ฟู",
  },
  {
    name: "color protection",
    en: "Color Protection",
    th: "คงสภาพผมทำสี",
  },
  {
    name: "fix split ends",
    en: "Fix Split Ends",
    th: "ซ่อมแซมผมแตกปลาย",
  },
  {
    name: "hydrate",
    en: "Hydrate",
    th: "เพิ่มความชุ่มชื้น",
  },
  {
    name: "nourish roots",
    en: "Nourish Roots",
    th: "บำรุงรากผม",
  },
  {
    name: "oil control",
    en: "Oil Control",
    th: "ควบคุมความมัน",
  },
  {
    name: "rejuvenate",
    en: "Rejuvenate",
    th: "ฟื้นคืนสภาพ",
  },
  {
    name: "shine",
    en: "Shine",
    th: "ผมเงางาม",
  },
  {
    name: "strengthen",
    en: "Strengthen",
    th: "เสริมสร้างรากและเส้นผมแข็งแรง",
  },
  {
    name: "thermal protection",
    en: "Thermal Protection",
    th: "ปกป้องผมเสียจากความร้อน",
  },
  {
    name: "volumize",
    en: "Volumize",
    th: "เพิ่มวอลลุ่ม",
  },
];

export interface IFormulaData {
  formulaName: IData;
  property: IData;
  ingredientIds: number[];
}

export const formulaIngredientData: IData[] = [
  {
    id: 1,
    name: "avocado",
    en: "avocado",
    th: "อาโวคาโด",
  },
  {
    id: 2,
    name: "bran",
    en: "bran",
    th: "รำข้าว",
  },
  {
    id: 3,
    name: "bergamot",
    en: "bergamot",
    th: "มะกรูด",
  },
  {
    id: 4,
    name: "clove",
    en: "clove",
    th: "กานพลู",
  },
  {
    id: 5,
    name: "coconut",
    en: "coconut",
    th: "มะพร้าว",
  },
  {
    id: 6,
    name: "evening primrose",
    en: "evening primrose",
    th: "อีฟนิ่งพริมโรส",
  },
  {
    id: 7,
    name: "grape seed",
    en: "grape seed",
    th: "เมล็ดองุ่น",
  },
  {
    id: 8,
    name: "jojoba",
    en: "jojoba",
    th: "โจโจ้บา",
  },
  {
    id: 9,
    name: "lemon",
    en: "lemon",
    th: "มะนาวเหลือง",
  },
  {
    id: 10,
    name: "lemon grass",
    en: "lemon grass",
    th: "ตะไคร้",
  },
  {
    id: 11,
    name: "macadamia",
    en: "macadamia",
    th: "มะคาเดเมีย",
  },
  {
    id: 12,
    name: "marjoram",
    en: "marjoram",
    th: "มาร์จอรัม",
  },
  {
    id: 13,
    name: "moringa",
    en: "moringa",
    th: "มะรุม",
  },
  {
    id: 14,
    name: "peppermint",
    en: "peppermint",
    th: "เปปเปอร์มิ้นท์",
  },
  {
    id: 15,
    name: "rose hip",
    en: "rose hip",
    th: "โรสฮิป",
  },
  {
    id: 16,
    name: "sesame",
    en: "sesame",
    th: "งา",
  },
  {
    id: 17,
    name: "sunflower seed",
    en: "sunflower seed",
    th: "เมล็ดดอกทานตะวัน",
  },
  {
    id: 18,
    name: "sweet almond",
    en: "sweet almond",
    th: "สวีทอัลมอนด์",
  },
  {
    id: 19,
    name: "tea tree",
    en: "tea tree",
    th: "ทีทรี",
  },
];

export const formulaData: IFormulaData[] = [
  {
    formulaName: {
      name: "Clove Regenerator",
      en: "Clove Regenerator",
      th: "โคลฟ รีเจนเนอร์เรเตอร์",
    },
    property: {
      name: "Damage Remedy",
      en: "Damage Remedy",
      th: "ฟื้นฟูผมเสีย",
    },
    ingredientIds: [4, 5, 2, 8, 6],
  },
  {
    formulaName: {
      name: "Lemon Grass Protection",
      en: "Lemon Grass Protection",
      th: "เลมอนกราส โพรเทคชั่น",
    },
    property: {
      name: "Anti-Dandruff",
      en: "Anti-Dandruff",
      th: "ขจัดรังแค",
    },
    ingredientIds: [10, 6, 17, 8, 13],
  },
  {
    formulaName: {
      name: "Marjoram Mix&Match",
      en: "Marjoram Mix&Match",
      th: "มาร์จอรัม มิกซ์แอนด์แมทช์",
    },
    property: {
      name: "Color Protection",
      en: "Color Protection",
      th: "คงสภาพผมทำสี",
    },
    ingredientIds: [12, 13, 6, 15],
  },
  {
    formulaName: {
      name: "Peppermint Heat Barrier",
      en: "Peppermint Heat Barrier",
      th: "เปปเปอร์มิ้นท์ ฮีท แบริเออร์",
    },
    property: {
      name: "Thermal Protection",
      en: "Thermal Protection",
      th: "ปกป้องผมเสียจากความร้อน",
    },
    ingredientIds: [14, 5, 1, 11, 7],
  },
  {
    formulaName: {
      name: "Shiny Coconut Oil",
      en: "Shiny Coconut Oil",
      th: "ชายนี่ โคโคนัท ออยล์",
    },
    property: {
      name: "Shine",
      en: "Shine",
      th: "ผมเงางาม",
    },
    ingredientIds: [5, 3, 16, 2, 17],
  },
  {
    formulaName: {
      name: "Super Macadamia Power",
      en: "Super Macadamia Power",
      th: "ซุปเปอร์ แมคคาเดเมีย พาวเวอร์",
    },
    property: {
      name: "Strengthen",
      en: "Strengthen",
      th: "เสริมสร้างรากและเส้นผมแข็งแรง",
    },
    ingredientIds: [11, 19, 13, 8, 17],
  },
  {
    formulaName: {
      name: "Yellow Lemon Controler",
      en: "Yellow Lemon Controler",
      th: "เยลโล่ เลม่อน คอนโทรลเลอร์",
    },
    property: {
      name: "Oil Control",
      en: "Oil Control",
      th: "ควบคุมความมัน",
    },
    ingredientIds: [9, 15, 5, 18, 7],
  },
];

export interface IColor extends IData {
  hexColor: string;
}

export const colorData: IColor[] = [
  {
    name: "blue monday",
    en: "Blue Monday",
    th: "ฟ้า",
    hexColor: "#AEF4F9",
  },
  {
    name: "emerald",
    en: "Emerald",
    th: "เขียว",
    hexColor: "#AEF9C3",
  },
  {
    name: "pink skies",
    en: "Pink Skies",
    th: "ชมพู",
    hexColor: "#F9CAF4",
  },
  {
    name: "purple rain",
    en: "Purple Rain",
    th: "ม่วง",
    hexColor: "#CFBAFC",
  },
  {
    name: "tangerine",
    en: "Tangerine",
    th: "ส้ม",
    hexColor: "#F9C0AE",
  },
  {
    name: "no color",
    en: "No Color",
    th: "ไม่มีสี",
    hexColor: "#DEDEDE",
  },
];

export const scentIngredientData: IData[] = [
  {
    id: 1,
    name: "apple",
    en: "apple",
    th: "แอปเปิ้ล",
  },
  {
    id: 2,
    name: "bergamot",
    en: "bergamot",
    th: "มะกรูด",
  },
  {
    id: 3,
    name: "black current",
    en: "black current",
    th: "แบล็คเคอร์แรนท์",
  },
  {
    id: 4,
    name: "elemi",
    en: "elemi",
    th: "ผลเอลเลมิ",
  },
  {
    id: 5,
    name: "hazelnut",
    en: "hazelnut",
    th: "ผลเฮเซลนัด",
  },
  {
    id: 6,
    name: "hyacinth",
    en: "hyacinth",
    th: "ดอกไฮยาซิน",
  },
  {
    id: 7,
    name: "jasmine",
    en: "jasmine",
    th: "ดอกมะลิ",
  },
  {
    id: 8,
    name: "lemon",
    en: "lemon",
    th: "มะนาวเหลือง",
  },
  {
    id: 9,
    name: "nutmeg",
    en: "nutmeg",
    th: "จันทร์เทศ",
  },
  {
    id: 10,
    name: "pear",
    en: "pear",
    th: "ลูกแพร์",
  },
  {
    id: 11,
    name: "pine",
    en: "pine",
    th: "ไม้สน",
  },
  {
    id: 12,
    name: "plum",
    en: "plum",
    th: "ลูกพลัม",
  },
  {
    id: 13,
    name: "sea breeze",
    en: "sea breeze",
    th: "ลมทะเล",
  },
  {
    id: 14,
    name: "tangerine",
    en: "tangerine",
    th: "ส้มเขียวหวาน",
  },
];

export interface IScentData {
  location: IData;
  scentIngredientIds: number[];
}

export const ScentData: IScentData[] = [
  {
    location: {
      name: "Gardens by the Bay At Singapore",
      en: "Gardens by the Bay At Singapore",
      th: "การ์เด้นบายเดอะเบย์ แอท สิงคโปร์",
    },
    scentIngredientIds: [13, 7, 6],
  },
  {
    location: {
      name: "Han River In October At Korea",
      en: "Han River In October At Korea",
      th: "ฮันริเวอร์อินออคโทเบอร์ แอท โคเรีย",
    },
    scentIngredientIds: [5, 4, 11],
  },
  {
    location: {
      name: "Maldives Sunset At Maldives",
      en: "Maldives Sunset At Maldives",
      th: "มัลดีฟส์ซันเซ็ท แอท มัลดีฟส์",
    },
    scentIngredientIds: [1, 3, 12],
  },
  {
    location: {
      name: "Shibuya Morning At Japan",
      en: "Shibuya Morning At Japan",
      th: "ชิบูย่ามอร์นิ่ง แอท เจแปน",
    },
    scentIngredientIds: [14, 9, 2],
  },
  {
    location: {
      name: "Thonglor Night Club At Thailand",
      en: "Thonglor Night Club At Thailand",
      th: "ทองหล่อไนท์คลับ แอท ไทยแลนด์",
    },
    scentIngredientIds: [2, 8, 10],
  },
  {
    location: {
      name: "Fragrance Free",
      en: "Fragrance Free",
      th: "ไม่มีกลิ่น",
    },
    scentIngredientIds: [],
  },
];
