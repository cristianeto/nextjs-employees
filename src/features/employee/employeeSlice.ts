import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState, IEmployee } from '@interfaces';

const initialState: IEmployeeState = {
  employees: [],
  newEmployee: {
    id: '',
    dni: '',
    name: '',
    lastname: '',
    email: '',
    type: 'employee',
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
      state.newEmployee = action.payload;
    },
    resetEmployee: (state) => {
      state.newEmployee = initialState.newEmployee;
    },
  },
});

export const { addEmployee, loadingEmployees, resetEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
