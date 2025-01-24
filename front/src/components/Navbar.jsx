import React from 'react';
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='Logo' /> 
      </div>
      <ul className='navbar-menu'>
        <li><a href='/'>Accueil</a></li>
        <li><a href='commandes'>Commandes</a></li>
        <li><a href='panier'>Panier</a></li>
      </ul> 
    </nav>
  );
}

export default Navbar;
