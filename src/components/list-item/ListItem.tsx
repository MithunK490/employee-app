import { FC } from 'react';
import './Style.css';
import StatusIndicator from '../statusIndicator/statusIndicator';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type InputPropTypes = {
  employeeName: string;
  employeeId: string;
  joiningDate: string;
  role: string;
  status: boolean;
  experience: string;
};

const ListItem: FC<InputPropTypes> = ({
  employeeName,
  employeeId,
  joiningDate,
  role,
  status,
  experience
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/employees/${employeeId}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch({
      type: 'EMPLOYEE:DELETE',
      payload: {
        employeeId: 'ABC'
      }
    });
  };

  return (
    <div className='itemRow' onClick={handleClick}>
      <div>{employeeName}</div>
      <div>{employeeId}</div>
      <div>{joiningDate}</div>
      <div>{role}</div>
      <div>
        <StatusIndicator isActive={status} />
      </div>
      <div>{experience}</div>
      <div>
        <img src='../../../assets/icons/delete.svg' alt='delete' onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ListItem;
