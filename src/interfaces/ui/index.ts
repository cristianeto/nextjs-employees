import React from 'react';
import { IEmployee } from '../data';

export interface ICredentials {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  username: string;
}

export interface IEmployeeItem {
  employee: IEmployee;
  onDelete: (params: string | number) => void;
  onUpdate: (params: string | number) => void;
}
export interface IEmployeesList {
  employees: IEmployee[];
}

export interface IEmployeesPage {
  employees: IEmployee[];
}

export interface INavbar {
  name: string;
  path: string;
  label: string;
}

export interface ISimpleTable {
  headers: string[];
  children: React.ReactNode;
}
