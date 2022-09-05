import { IEmployee } from '@interfaces';

export const employee: IEmployee = {
  id: '1',
  dni: '0000000001',
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

export const headersTable = ['#', 'Name', 'Lastname', 'Email', 'Actions'];
