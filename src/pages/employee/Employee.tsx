import { useParams } from 'react-router-dom';
import EmployeeDetails from '../../components/employee-details/EmployeeDetails';
import LabelValuePair from '../../components/label-value-pair/LabelValuePair';
import './Style.css';
import { useEffect, useState } from 'react';
import { useLazyGetEmployeeQuery } from './api';
import StatusIndicator from '../../components/statusIndicator/statusIndicator';
// import { EmployeeType } from '../../types/employee.type';

const Employee = () => {
  let { id } = useParams();

  const [employeeData, setEmployeesData] = useState({
    name: 'Naruto',
    joiningDate: '20-20-2020',
    experience: '10 years',
    role: 'HR',
    department_id: 4,
    status: true,
    address: {
      line1: 'Leaf Village',
      pincode: '125346'
    }
  });

  const [getEmloyeeById, { data, isSuccess }] = useLazyGetEmployeeQuery();

  useEffect(() => {
    getEmloyeeById(id);
  }, []);

  useEffect(() => {
    if (data && isSuccess) setEmployeesData(data);
  }, [data, isSuccess]);

  return (
    <div className='employee'>
      <div>
        <EmployeeDetails heading='Employee Details' />
      </div>

      <div className='employeeDetails'>
        <LabelValuePair label='Employee Name' value={employeeData.name} />
        <LabelValuePair label='Joining Date' value={employeeData.joiningDate} />
        <LabelValuePair label='Experience' value={employeeData.experience} />
        <LabelValuePair label='Role' value={employeeData.role} />
        <LabelValuePair label='Status' value={<StatusIndicator isActive={employeeData.status} />} />
        <LabelValuePair label='Address' value={employeeData.address.line1} />
        <LabelValuePair label='Employee ID' value={id} />
      </div>
    </div>
  );
};

export default Employee;
