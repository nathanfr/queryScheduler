import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navBar'>
      <ul>
        <li className='navLink'><a href="#home">Connections</a></li>
        <li id='floatRight' className='navLink'><a href="#about">Sign Out</a></li>
      </ul>
    </div>
  )
}

export default Navbar;