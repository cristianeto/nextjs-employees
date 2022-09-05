import employeeReducer, {
  addEmployee,
  initialState,
  loadingEmployees,
  resetEmployee,
} from '@features/employee/employeeSlice';
import { IEmployeeState } from '@interfaces';
import { employee, employees } from '@mocks';

describe('employeeSlice', () => {
  it('should return the employees', () => {
    expect(employeeReducer(undefined, { type: undefined })).toEqual(
      initialState,
    );
  });

  it('should load employees inside of state ', () => {
    const payload = employees;
    expect(employeeReducer(initialState, loadingEmployees(payload))).toEqual({
      employees: payload,
      employee: initialState.employee,
    });
  });

  it('should add a new employee inside of state ', () => {
    const payload = employee;
    expect(employeeReducer(initialState, addEmployee(payload))).toEqual({
      employees: [employee],
      employee: initialState.employee,
    });
  });
  it('should reser the employee state ', () => {
    const payload = employees;
    const previousState: IEmployeeState = {
      employees: payload,
      employee: {
        id: '123',
        dni: '1231231231',
        name: 'Cris',
        lastname: 'G',
        email: 'cr@gmail.com',
      },
    };
    expect(employeeReducer(previousState, resetEmployee())).toEqual({
      employees: payload,
      employee: initialState.employee,
    });
  });
});
