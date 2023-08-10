import type { FC } from 'react';

type InputPropTypes = {
  value: string;
  onChange: (event) => void;
  label: string;
  placeholder: string;
  type: 'text' | 'password';
};

const Input: FC<InputPropTypes> = (props) => {
  const { value, onChange, label, placeholder, type } = props;

  return (
    <div className='input'>
      <label>{label}</label>
      <input placeholder={placeholder} value={value} onChange={onChange} type={type} />
    </div>
  );
};

export default Input;
