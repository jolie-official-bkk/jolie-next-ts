import {
  TFormulaName,
  THairGoal,
  THairStructure,
  THairTreat,
  TNaturalHair,
  TScalpMoisture,
  TScent,
} from "./hair.interface";

export interface IOrder {
  user_id: number;
  natural_hair_type: TNaturalHair | null;
  hair_structure: THairStructure | null;
  scalp_moisture: TScalpMoisture | null;
  hair_treat: THairTreat[] | null;
  hair_goal: THairGoal[] | null;
  formula: TFormulaName[] | null;
  color: string | null;
  scent: TScent | null;
  shampoo_name: string | null;
}
