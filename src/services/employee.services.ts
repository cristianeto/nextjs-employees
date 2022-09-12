import { IEmployee } from '@interfaces';
import http from 'src/config/http.service';

const apiEndpoint: string = '/employees';

export function getEmployees() {
  return http.get(apiEndpoint);
}

export function saveEmployee(employee: Partial<IEmployee>) {
  if (!employee.id) {
    const body = { ...employee };
    delete body.id;

    return http.post(apiEndpoint, body);
  }

  return http.put(`${apiEndpoint}/${employee.id}`, employee);
}
