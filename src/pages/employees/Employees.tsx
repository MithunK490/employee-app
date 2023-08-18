import { Route, Routes } from 'react-router-dom';
import EmployeeList from '../../components/employee-list/EmployeeList';
import Header from '../../components/header/Header';
import ListItem from '../../components/list-item/ListItem';
import Navigation from '../../components/navigation/navigation';
import './Style.css';
import React, { Fragment, useEffect, useState } from 'react';
import Employee from '../employee/Employee';
import EmployeeForm from '../employee-form/employeeForm';
// import { useSelector } from 'react-redux';
import { useGetEmployeeListQuery } from './api';
const headings = [
  'Employee Name',
  'Employee id',
  'Joining Date',
  'Role',
  'Status',
  'Experience',
  'Action'
];

const Employees: React.FC = () => {
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });

  const [employeesData, setEmployeesData] = useState([]);
  const { data, isSuccess } = useGetEmployeeListQuery('');

  useEffect(() => {
    if (data && isSuccess) {
      setEmployeesData(data);
      console.log(employeesData);
    }
  }, [data, isSuccess]);

  console.log(employeesData);

  return (
    <div className='employees'>
      <Header />
      <div className='mainBlock'>
        <Navigation />
        <div className='employeeList1'>
          <Routes>
            <Route
              path='/'
              element={
                <Fragment>
                  <EmployeeList heading='Employee List'></EmployeeList>
                  <table>
                    <div className='itemRow headingRow'>
                      {headings.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                    <div>
                      {employeesData.map((item) => (
                        <ListItem
                          key={item.id}
                          employeeName={item.name}
                          employeeId={item.id}
                          joiningDate={item.joiningDate}
                          role={item.role}
                          experience={item.experience}
                          status={item.status}
                        />
                      ))}
                    </div>
                  </table>
                </Fragment>
              }
            ></Route>
            <Route
              path='/:id'
              element={
                <Fragment>
                  <Employee />
                </Fragment>
              }
            ></Route>
            <Route
              path='/create'
              element={
                <Fragment>
                  <EmployeeForm />
                </Fragment>
              }
            ></Route>
            <Route
              path='/edit/:id'
              element={
                <Fragment>
                  <EmployeeForm />
                </Fragment>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Employees;
