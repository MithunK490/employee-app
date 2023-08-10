import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login';

const App: FC = () => {
  return (
    <div className='app'>
      <Login />
    </div>
  );
};

export default App;
