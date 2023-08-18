import { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import './Style.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateEmployeeMutation } from './api';
import { useLazyGetEmployeeQuery } from '../employee/api';
import Address from '../../components/address/Address';

const EmployeeForm = () => {
  const { id } = useParams();

  const [getEmloyeeById, { data: response }] = useLazyGetEmployeeQuery();

  const [name, setName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (id) getEmloyeeById(id);
  }, []);

  useEffect(() => {
    if (response) {
      console.log(response);

      setName(response.name);
      setJoiningDate(response.joiningDate);
      setExperience(response.experience);
      setDepartment(response.department);
      setRole(response.role);
      setStatus(response.status);
      setLine1(response.address.line1);
      setLine2(response.address.line2);
      setLine3(response.address.pincode);
      setEmail(response.email);
      setPassword(response.password);
    }
  }, [response]);

  const navigate = useNavigate();

  const [createEmployee, { isSuccess }] = useCreateEmployeeMutation();

  useEffect(() => {
    if (isSuccess) navigate('/employees');
  }, [isSuccess]);

  const handleCreate = () => {
    console.log('Creating employee..');

    createEmployee({
      id: 'ABC',
      name,
      joiningDate,
      role,
      experience,
      status: true,
      address: {
        line1,
        line2,
        pincode: line3
      },
      department_id: Number(department),
      email,
      password
    });
  };

  const handleSave = () => {};

  const handleCancel = () => {};

  return (
    <div className='createEmployee'>
      <div className='header'>{id ? 'Edit Employee' : 'Create Employee'}</div>
      <div className='createEmployeeForm'>
        <div className='inputFields'>
          <div>
            <Input
              label='Emloyee Name'
              placeholder={id ? '' : 'Employee Name'}
              value={name}
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Input
              label='Joining Date'
              placeholder={id ? '' : 'Joining Date'}
              value={joiningDate}
              type='text'
              onChange={(e) => setJoiningDate(e.target.value)}
            />
          </div>

          <div>
            <Input
              label='Experience'
              placeholder={id ? '' : 'Experience'}
              value={experience}
              type='text'
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Department'
              placeholder={id ? '' : 'Choose Department'}
              value={department}
              type='text'
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Role'
              placeholder={id ? '' : 'Role'}
              value={role}
              type='text'
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Status'
              placeholder={id ? '' : 'Status'}
              value={status}
              type='text'
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Email'
              placeholder={id ? '' : 'Email'}
              value={email}
              type='text'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Password'
              placeholder={id ? '' : 'Password'}
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Address
              line1={line1}
              line2={line2}
              line3={line3}
              onChange1={(e) => setLine1(e.target.value)}
              onChange2={(e) => setLine2(e.target.value)}
              onChange3={(e) => setLine3(e.target.value)}
            />
          </div>
        </div>
        <div className='buttons'>
          <div className='button'>
            <Button
              type='submit'
              value={id ? 'Save' : 'Create'}
              onClick={id ? handleCreate : handleSave}
            />
          </div>
          <div className='button'>
            <Button type='button' value='Cancel' onClick={handleCancel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
