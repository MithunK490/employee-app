import { createAction } from '@reduxjs/toolkit';
import { DispatchConstants } from '../constants/employee.constants';

type addEmployeeType = {
  employeeName: string;
  employeeId: string;
  joiningDate: string;
  experience: string;
  department: string;
  role: string;
  status: boolean;
  address: string;
};

// type deleteEmployeeType = {
//   employeeId: string;
// };

const addEmployee = createAction<addEmployeeType>(DispatchConstants.CREATE_EMPLOYEE);

// const deleteEmployee = createAction<deleteEmployeeType>(DispatchConstants.EDIT_EMPLOYEE);

export default addEmployee;
