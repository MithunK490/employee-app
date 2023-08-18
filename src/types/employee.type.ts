import { AddressType } from './address.type';

export type EmployeeType = {
  name: string;
  id: string;
  joiningDate: string;
  experience: string;
  department: string;
  role: string;
  status: boolean;
  address: AddressType;
};
