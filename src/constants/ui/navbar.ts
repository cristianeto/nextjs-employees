import { INavbar } from '@interfaces';

export const publicItemsNavbar: INavbar[] = [
  { name: 'home', path: '/', label: 'Home' },
  { name: 'login', path: '/auth/login', label: 'Login' },
];

export const adminItemsNavbar: INavbar[] = [
  { name: 'dashboard', path: '/admin/dashboard', label: 'Home' },
  { name: 'employees', path: '/admin/employees', label: 'Employees' },
];
