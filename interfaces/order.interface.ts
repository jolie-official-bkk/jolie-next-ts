import {
  TFormula,
  THairGoal,
  THairStructure,
  THairTreat,
  TNaturaHair,
  TScalpMoisture,
  TScent,
} from "./hair.interface";

export interface IOrder {
  user_id: number;
  natural_hair_type: TNaturaHair | null;
  hair_structure: THairStructure | null;
  scalp_moisture: TScalpMoisture | null;
  hair_treat: THairTreat[] | null;
  hair_goal: THairGoal[] | null;
  formula: TFormula[] | null;
  color: string | null;
  scent: TScent | null;
  shampoo_name: string | null;
}
