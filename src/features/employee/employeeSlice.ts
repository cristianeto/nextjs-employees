import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState, IEmployee } from '@interfaces';

export const initialState: IEmployeeState = {
  employees: [],
  employee: {
    id: '',
    dni: '',
    name: '',
    lastname: '',
    email: '',
  },
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    loadingEmployees: (state, action: PayloadAction<IEmployee[]>) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action: PayloadAction<IEmployee>) => {
      state.employees.push(action.payload);
    },
    setEmployee: (state, action: PayloadAction<IEmployee>) => {
      state.employee = action.payload;
    },
    updateEmployee: (state, action: PayloadAction<IEmployee>) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id,
      );
      state.employees[index] = action.payload;
    },
    resetEmployee: (state) => {
      state.employee = initialState.employee;
    },
  },
});

export const {
  addEmployee,
  loadingEmployees,
  resetEmployee,
  setEmployee,
  updateEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
