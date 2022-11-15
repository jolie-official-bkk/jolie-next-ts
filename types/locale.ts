import common from "../public/locales/en/common.json";
import { OnlyStringKeys } from "./utilityTypes";

export const availableLanguage = ["en", "th"];

export interface Resources {
  common: OnlyStringKeys<typeof common>;
}

export type Locale = typeof availableLanguage[number];
