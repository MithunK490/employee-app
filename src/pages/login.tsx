import Input from '../components/input/Input';
import Button from '../components/button/Button';
import { useState } from 'react';
import './style.css';

const Login = () => {

  const [input, setInput] = useState('');

  const handleInput = () => {
    setInput(input);
  };

  const handleClick = () => {
    return;
  };

  return (
    <div className='login'>
      <section className='login_section'>
        <div className='column_left'>
          <img src='../../../assets/img/banner.png' alt='kv-login' />
        </div>
        <div className='column_right'>
          <div>
            <div className='kv-logo'>
              <img src='../../../assets/img/kv-logo.png' alt='kv-logo' />
            </div>
            <div className='login_form'>
              <form action='GET'>
                <div className='input'>
                  <Input
                    // label='Username'
                    type='text'
                    placeholder='username'
                    value={input}
                    onChange={handleInput}
                  />
                </div>
                <div className='input'>
                  <Input
                    // label='Password'
                    type='password'
                    placeholder='password'
                    value={input}
                    onChange={handleInput}
                  />
                </div>
                <div className='button'>
                <Button value='Login In' onClick={handleClick} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
