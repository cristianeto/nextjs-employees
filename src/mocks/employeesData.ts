import { IEmployee } from '@interfaces';

export const employee: IEmployee = {
  id: '1',
  dni: '9999999999',
  name: 'Mark',
  lastname: 'Zuck',
  email: 'mark@example.com',
};

export const initialState: IEmployee = {
  id: '',
  dni: '',
  name: '',
  lastname: '',
  email: '',
};

export const employeeForm = {
  titles: {
    create: 'new employee',
    update: 'update',
    updateRegister: 'update Employee',
    deleteRegister: 'delete',
    saveRegister: 'Save',
  },
  labels: {
    dni: 'Dni',
    name: 'Name',
    lastname: 'Lastname',
    email: 'Email',
    type: 'Type',
  },
};

export const employees: IEmployee[] = [
  {
    id: '1',
    dni: '00000000001',
    name: 'John',
    lastname: 'John',
    email: 'john@example.com',
    password: '123456',
    birthdate: '2000-12-20',
    address: 'Avenue 12, NY',
    cellphone: '1234567890',
    isVaccinated: true,
    vaccine: 'Sputnik',
    vaccinationDate: '2021-08-20',
    dose: 4,
    type: 'employee',
  },
  {
    id: '2',
    dni: '00000000002',
    name: 'Crist',
    lastname: 'Mac Courney',
    email: 'crist@example.com',
    password: '123456',
    birthdate: '2000-12-20',
    address: 'Avenue 12, NY',
    cellphone: '1234567890',
    isVaccinated: true,
    vaccine: 'AstraZeneca',
    vaccinationDate: '2021-09-14',
    dose: 3,
    type: 'employee',
  },
  {
    id: '3',
    dni: '00000000003',
    name: 'Fer',
    lastname: 'Gregory',
    email: 'fer@example.com',
    password: '123456',
    birthdate: '2000-12-20',
    address: 'Avenue 12, NY',
    cellphone: '1234567890',
    isVaccinated: true,
    vaccine: 'Jhonson & Jhonson',
    vaccinationDate: '2021-10-10',
    dose: 3,
    type: 'employee',
  },
  {
    id: '4',
    dni: '00000000004',
    name: 'Newton',
    lastname: 'Logan',
    email: 'newt@example.com',
    password: '123456',
    birthdate: '2000-12-20',
    address: 'Avenue 12, NY',
    cellphone: '1234567890',
    isVaccinated: true,
    vaccine: 'AstraZeneca',
    vaccinationDate: '2022-02-15',
    dose: 3,
    type: 'employee',
  },
];

export const headersTable = ['#', 'Name', 'Lastname', 'Email', 'Actions'];
