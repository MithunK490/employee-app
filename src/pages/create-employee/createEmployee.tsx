import { useState } from 'react';
import Input from '../../components/input/Input';
import './Style.css';
import Button from '../../components/button/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employeeCreateActionCreator = ({
    name,
    joiningDate,
    role,
    experience,
    address,
    department
  }) => {
    return {
      type: 'EMPLOYEE:CREATE',
      payload: {
        employeeName: name,
        employeeId: 'ABC',
        joiningDate,
        role,
        experience,
        status: true,
        address,
        department,
        action: 'action'
      }
    };
  };

  const handleSubmit = () => {
    dispatch(
      employeeCreateActionCreator({
        name,
        joiningDate,
        role,
        experience,
        address,
        department
      })
    );
    navigate('/employees');
  };

  const handleCancel = () => {};

  return (
    <div className='createEmployee'>
      <div className='header'>Create Employee</div>
      <div className='createEmployeeForm'>
        <div className='inputFields'>
          <div>
            <Input
              label='Emloyee Name'
              placeholder='Employee Name'
              value={name}
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Input
              label='Joining Date'
              placeholder='Joining Date'
              value={joiningDate}
              type='text'
              onChange={(e) => setJoiningDate(e.target.value)}
            />
          </div>

          <div>
            <Input
              label='Experience'
              placeholder='Experience'
              value={experience}
              type='text'
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Department'
              placeholder='Choose Department'
              value={department}
              type='text'
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Role'
              placeholder='Role'
              value={role}
              type='text'
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Status'
              placeholder='Status'
              value={status}
              type='text'
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <Input
              label='Address'
              placeholder='Address'
              value={address}
              type='text'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className='buttons'>
          <div className='button'>
            <Button type='submit' value='Create' onClick={handleSubmit} />
          </div>
          <div className='button'>
            <Button type='button' value='Cancel' onClick={handleCancel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
