import React from 'react';
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='Logo' /> 
      </div>
      <ul className='navbar-menu'>
        <li><a href='#'>Accueil</a></li>
        <li><a href='#'>Commandes</a></li>
        <li><a href='#'>Panier</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
