import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClick = () => {
    if (username && password) navigate('/employees');
    else setShowError(true);
  };

  const navigate = useNavigate();

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
              <Input
                label='Username'
                type='text'
                placeholder='username'
                value={username}
                onChange={handleUsername}
              />

              <Input
                label='Password'
                type='password'
                placeholder='password'
                value={password}
                onChange={handlePassword}
              />

              <Button value='Login In' onClick={handleClick} />
              {showError && <div className='error-message'>Provide username and password</div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
