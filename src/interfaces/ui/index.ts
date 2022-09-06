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
  onOpenModalForm: (typeForm: string, employeeId: string) => void;
  onUpdate: (params: string | number) => void;
}
export interface IEmployeesList {
  data: IEmployee[] | undefined;
  onDelete: (params: string | number) => void;
  onOpenModalForm: (typeForm: string, employeeId: string) => void;
  onUpdate: (params: string | number) => void;
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

export interface IEmployeeForm {
  formType: string;
  initialState: IEmployee;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (employee: IEmployee) => void;
}

export interface IModal {
  children: React.ReactNode;
  title: string;
  mainButtonText: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface ITextField {
  isError?: boolean;
  helperText?: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  type?: string;
}

export interface IForm {
  initialState: IEmployee;
  onClose: () => void;
  onSubmit: (employee: IEmployee) => void;
  labels: {
    dni: string;
    name: string;
    lastname: string;
    email: string;
    type: string;
  };
}

export interface IButton {
  children: React.ReactNode;
  colorScheme?: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
}
