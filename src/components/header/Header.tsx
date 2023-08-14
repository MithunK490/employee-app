import type { FC } from 'react';
import './Style.css';

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='image'>
        <img src='../../../assets/img/kv-logo.png' />
      </div>
      <div className='empty'></div>
    </div>
  );
};

export default Header;
