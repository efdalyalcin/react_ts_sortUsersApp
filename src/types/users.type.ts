export interface IUser {
  name: string;
  age: number;
  email: string;
  country: string;
  phone: string;
}

export interface IMockData {
  data: IUser[];
}

export type TSortOption = 'asc' | 'dsc' | 'none';
