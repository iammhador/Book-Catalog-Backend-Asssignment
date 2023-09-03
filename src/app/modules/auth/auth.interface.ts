import { Order, Rating } from "@prisma/client";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
  orders?: Order[];
  ratings?: Rating[];
}

export interface IAuthUser {
  email: string;
  password: string;
}

export interface IAuthUserResponse {
  token: string | null;
}

export interface IPassMatch {
  isPasswordsMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
}
