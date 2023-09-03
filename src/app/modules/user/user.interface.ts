export interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
  orders: any[];
  ratings: any[];
}
