import EmployeeDetails from '../../components/employee-details/EmployeeDetails';
import LabelValuePair from '../../components/label-value-pair/LabelValuePair';
import './Style.css';

const Employee = () => {
  return (
    <div className='employee'>
      <div>
        <EmployeeDetails heading='Employee Details' />
      </div>
      <div className='employeeDetails'>
        <LabelValuePair label='Employee Name' value='Vishal' />
        <LabelValuePair label='Joining Date' value='20-03-2010' />
        <LabelValuePair label='Experience' value='2 Years' />
        <LabelValuePair label='Role' value='Full Stack' />
        <LabelValuePair label='Address' value='Kakkanad' />
        <LabelValuePair label='Employee ID' value='XYZ' />
      </div>
    </div>
  );
};

export default Employee;
