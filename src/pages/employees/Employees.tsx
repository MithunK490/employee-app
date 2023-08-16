import { Route, Routes } from 'react-router-dom';
import EmployeeList from '../../components/employee-list/EmployeeList';
import Header from '../../components/header/Header';
import ListItem from '../../components/list-item/ListItem';
import Navigation from '../../components/navigation/navigation';
import './Style.css';
import React, { Fragment } from 'react';
import Employee from '../employee/Employee';
import CreateEmployee from '../create-employee/createEmployee';
import EditEmployee from '../edit-employee/EditEmployee';
import { useSelector } from 'react-redux';
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
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

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
                          key={item.employeeId}
                          employeeName={item.employeeName}
                          employeeId={item.employeeId}
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
                  <CreateEmployee />
                </Fragment>
              }
            ></Route>
            <Route
              path='/edit'
              element={
                <Fragment>
                  <EditEmployee />
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
