import type { FC } from 'react';

type InputPropTypes = {
  value: string;
  onChange: () => void;
  // label: string;
  placeholder: string;
  type: 'text' | 'password';
};

const Input: FC<InputPropTypes> = (props) => {
  const { value, onChange, placeholder, type } = props;

  return (
    <div className='input'>
      {/* <label>{label}</label> */}
      <input placeholder={placeholder} value={value} onChange={onChange} type={type} />
    </div>
  );
};

export default Input;
