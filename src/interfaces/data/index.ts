export interface IEmployee {
  id?: string;
  dni: string;
  name: string;
  lastname: string;
  email: string;
  password?: string;
  birthdate?: string;
  address?: string;
  cellphone?: string;
  isVaccinated?: boolean;
  vaccine?: 'Sputnik' | 'AstraZeneca' | 'Pfizer' | 'Jhonson & Jhonson';
  vaccinationDate?: string;
  dose?: 1 | 2 | 3 | 4 | 5;
  type?: 'admin' | 'employee';
}
export interface IError {
  error: string;
}
