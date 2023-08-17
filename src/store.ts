import { configureStore, createAction } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import baseApi from './services';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware]
});

const addEmployee = createAction('CREATE_EMPLOYEE');

console.log(addEmployee);

export default store;
