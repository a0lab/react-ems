import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-primary navbar-dark'>
        <div><span className="navbar-brand">Employee Management System</span></div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
            <Link to='/' className='nav-link'>List employees</Link>
            </li>
            <li className='nave-item'>
            <Link to='/add-employee/' className='nav-link'>Add employee</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header