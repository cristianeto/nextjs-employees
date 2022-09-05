import React from 'react';
import { IEmployee } from '../data';

export interface IEmployeeState {
  employees: IEmployee[];
  employee: IEmployee;
}

export interface IWrapperProvider {
  children: React.ReactNode;
}
