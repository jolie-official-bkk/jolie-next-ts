export interface IData {
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
