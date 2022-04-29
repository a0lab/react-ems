import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand h4"><span className='text-danger'>BizOpSys</span> EMS</span>
        </nav>                
      </div>
    )
  }
}

export default Header