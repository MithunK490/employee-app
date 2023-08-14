import { FC } from 'react';
import './Style.css';

type InputPropTypes = {
  label: string;
  value: any;
};

const LabelValuePair: FC<InputPropTypes> = ({ label, value }) => {
  return (
    <div className='labelValuePair'>
      <div className='label'>{label}</div>
      <div className='value'>{value}</div>
    </div>
  );
};

export default LabelValuePair;
