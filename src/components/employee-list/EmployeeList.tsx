import React, { FC } from 'react';
import './Style.css';
import CreateEditButton from '../create-edit-button/CreateEditButton';
import { useNavigate } from 'react-router-dom';

type InputPropTypes = {
  heading: string;
};

const EmployeeList: FC<InputPropTypes> = ({ heading }) => {
  const navigate = useNavigate();
  const handleCreateEmployeeClick = () => {
    navigate('/employees/create');
  };

  return (
    <div className='employeeList'>
      <div className='heading'>{heading}</div>
      <div className='filter'>
        <div className='filterBy'>Filter By</div>
        <div className='status'></div>
      </div>
      <div className='createEditButton'>
        <CreateEditButton
          onClick={handleCreateEmployeeClick}
          actionName='Create employee'
          iconForAction='../../../assets/img/+.png'
          alt='+'
        />
      </div>
    </div>
  );
};

export default EmployeeList;
