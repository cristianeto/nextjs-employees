import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import employeeReducer from '@features/employee/employeeSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      employees: employeeReducer,
    },
  });
}

const store = makeStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Asyncronuos request
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
