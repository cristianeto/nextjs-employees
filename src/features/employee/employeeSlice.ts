import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState, IEmployee } from '@interfaces';

const initialState: IEmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    loadingEmployees: (state, action: PayloadAction<IEmployee[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { loadingEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
