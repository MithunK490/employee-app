import type { FC } from 'react';

type InputPropTypes = {
  value: string;
  onClick: () => void;
  // label: string;
  //   placeholder: string;
  //   type: 'text' | 'password';
};

const Button: FC<InputPropTypes> = (props) => {
  const { value, onClick } = props;

  return (
    <div className='input'>
      {/* <label>{label}</label> */}
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;
