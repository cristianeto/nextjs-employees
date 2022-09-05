import { IEmployee } from '@interfaces';
import http from 'src/config/http.service';

const apiEndpoint: string = '/employees';

export function getEmployees() {
  return http.get(apiEndpoint);
}

export function saveEmployee(employee: IEmployee) {
  return http.post(apiEndpoint, employee);
}
