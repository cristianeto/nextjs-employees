import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState, IEmployee } from '@interfaces';

const initialState: IEmployeeState = {
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
      state.employee = action.payload;
    },
    resetEmployee: (state) => {
      state.employee = initialState.employee;
    },
  },
});

export const { addEmployee, loadingEmployees, resetEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
