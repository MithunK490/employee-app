import { FC } from 'react';
import './Style.css';

type InputPropTypes = {
  onClick: () => void;
  actionName: string;
  iconForAction: string;
  alt: string;
};

const CreateEditButton: FC<InputPropTypes> = ({ onClick, iconForAction, alt, actionName }) => {
  return (
    <div className='createEditButton'>
      <div className='plusSign' onClick={onClick}>
        <img src={iconForAction} alt={alt} />
      </div>
      <div className='createEmployeeText'>{actionName}</div>
    </div>
  );
};

export default CreateEditButton;
