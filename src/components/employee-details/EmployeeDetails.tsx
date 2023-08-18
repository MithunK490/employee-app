import React, { FC } from 'react';
import './Style.css';
import CreateEditButton from '../create-edit-button/CreateEditButton';
import { useNavigate } from 'react-router-dom';

type InputPropTypes = {
  heading: string;
};

const EmployeeDetails: FC<InputPropTypes> = ({ heading }) => {
  const navigate = useNavigate();
  const handleEditEmployeeClick = () => {
    navigate('/employees/edit');
  };

  return (
    <div className='employeeList'>
      <div className='heading'>{heading}</div>
      <div className='createEditButton'>
        <CreateEditButton
          onClick={handleEditEmployeeClick}
          actionName='Edit'
          iconForAction='../../../assets/img/Path 327.png'
          alt='edit'
        />
      </div>
    </div>
  );
};

export default EmployeeDetails;
