export const genderTypeArray = ["male", "female", "other"];

export type TGenderAttribute = typeof genderTypeArray[number];

export interface ILogin {
  email: string;
  password: string;
}
export interface IUser extends ILogin {
  user_id?: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: TGenderAttribute;
  created_at?: Date;
  updated_at?: Date;
}

export interface IRegister extends IUser {
  confirm_password?: string;
}
