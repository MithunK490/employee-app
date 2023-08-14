import { FC } from 'react';
import './Style.css';

type InputPropTypes = {
  isActive: boolean;
};

const StatusIndicator: FC<InputPropTypes> = ({ isActive }) => {
  const value = isActive ? 'Active' : 'InActive';
  const color = isActive ? '#D3F4BE' : '#FFBFBF';

  return (
    <div
      className='statusIndicator'
      style={{
        backgroundColor: color
      }}
    >
      {value}
    </div>
  );
};

export default StatusIndicator;
