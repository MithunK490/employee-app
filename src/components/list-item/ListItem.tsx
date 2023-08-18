import { FC } from 'react';
import './Style.css';
import StatusIndicator from '../statusIndicator/statusIndicator';
import { useNavigate } from 'react-router-dom';

type InputPropTypes = {
  employeeName: string;
  employeeId: string;
  joiningDate: string;
  role: string;
  status: boolean;
  experience: string;
  action: string;
};

const ListItem: FC<InputPropTypes> = ({
  employeeName,
  employeeId,
  joiningDate,
  role,
  status,
  experience,
  action
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/employees/${employeeId}`);
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
      <div>{action}</div>
    </div>
  );
};

export default ListItem;
