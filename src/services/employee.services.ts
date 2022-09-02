import http from 'src/config/http.service';

const apiEndpoint: string = '/employees';

export function getEmployees() {
  return http.get(apiEndpoint);
}
