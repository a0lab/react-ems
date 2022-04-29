import './App.css';
import { Outlet } from 'react-router-dom';

function Employees() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm card-footer '>
        <ul className='navbar-nav'>
            <li className='nav-item'>
            <a href='/employees' className='nav-link'>List employees</a>
            </li>
            <li className='nave-item'>
            <a href='/employees/add' className='nav-link'>Add employee</a>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <Outlet/>  
        </div>
        
    </div>
  );
}

export default Employees;
