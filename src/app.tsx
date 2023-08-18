import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/login';
import Employees from './pages/employees/Employees';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees/*' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
