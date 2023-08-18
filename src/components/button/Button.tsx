import type { FC } from 'react';
import './Style.css';

export type ButtonPropTypes = {
  type?: 'button' | 'submit';
  value: string;
  onClick?: () => void;
};

const Button: FC<ButtonPropTypes> = (props) => {
  const { value, onClick, type } = props;

  return (
    <div className='button'>
      <button type={type} onClick={onClick} data-testid='button-test'>
        {value}
      </button>
    </div>
  );
};

export default Button;
