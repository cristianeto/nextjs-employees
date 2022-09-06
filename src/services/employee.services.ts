import { IEmployee } from '@interfaces';
import http from 'src/config/http.service';

const apiEndpoint: string = '/employees';

export function getEmployees() {
  return http.get(apiEndpoint);
}

export function saveEmployee(employee: IEmployee) {
  if (employee.id === '') return http.post(apiEndpoint, employee);
  const body = { ...employee };
  delete body.id;

  return http.put(`${apiEndpoint}/${employee.id}`, body);
}
