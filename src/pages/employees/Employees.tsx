import { Route, Routes } from 'react-router-dom';
import EmployeeList from '../../components/employee-list/EmployeeList';
import Header from '../../components/header/Header';
import ListItem from '../../components/list-item/ListItem';
import Navigation from '../../components/navigation/navigation';
import './Style.css';
import { Fragment } from 'react';
import Employee from '../employee/Employee';
import CreateEmployee from '../create-employee/createEmployee';
import EditEmployee from '../edit-employee/EditEmployee';
const headings = [
  'Employee Name',
  'Employee id',
  'Joining Date',
  'Role',
  'Status',
  'Experience',
  'Action'
];

const Employees = () => {
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

                    <ListItem
                      employeeName='Vishal'
                      employeeId='XYZ'
                      joiningDate='20-03-2010'
                      role='Full Stack'
                      experience='5 Years'
                      action='Action'
                      status={true}
                    />

                    <ListItem
                      employeeName='Vishal'
                      employeeId='XYZ'
                      joiningDate='20-03-2010'
                      role='Full Stack'
                      experience='5 Years'
                      action='Action'
                      status={true}
                    />

                    <ListItem
                      employeeName='Vishal'
                      employeeId='XYZ'
                      joiningDate='20-03-2010'
                      role='Full Stack'
                      experience='5 Years'
                      action='Action'
                      status={false}
                    />
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
