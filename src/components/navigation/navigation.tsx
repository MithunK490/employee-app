import './Style.css';

const Navigation = () => {
  return (
    <div className='navigation'>
      <nav className='nav'>
        <a id='navbox' href=''>
          <img id='navlogo' src='../../../assets/icons/employees.svg' alt='Add Employee Details' />
          Employee list
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
