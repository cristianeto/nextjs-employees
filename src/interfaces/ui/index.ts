import { IEmployee } from '../data';

export interface ICredentials {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  username: string;
}

export interface IEmployeesTable {
  employees: IEmployee[];
}

export interface IEmployeesPage {
  employees: IEmployee[];
}

export interface IEmployeesContent {
  employees: IEmployee[];
}
