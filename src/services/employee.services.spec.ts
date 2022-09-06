import { getEmployees, saveEmployee } from './employee.services';
import { employees } from '@mocks';

describe('Employees Service', () => {
  it('should fetch a list of employees', async () => {
    const { data } = await getEmployees();
    expect(data).toEqual(employees);
  });

  it('should create a new employee', async () => {
    const newEmployee = {
      id: '',
      dni: '9999999999',
      name: 'Mark',
      lastname: 'Zuck',
      email: 'mark@example.com',
    };
    const { data } = await saveEmployee(newEmployee);
    expect(data).toEqual({ ...newEmployee, id: '1' });
  });

  it('should update a employee by id', async () => {
    const employeeToUpdate = {
      id: '1',
      dni: '1111111111',
      name: 'Chris',
      lastname: 'Brown',
      email: 'chris@example.com',
    };
    const { data } = await saveEmployee(employeeToUpdate);
    expect(data).toEqual(employeeToUpdate);
  });
});
