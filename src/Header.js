import React from 'react';
import './Header.css';
import Logo from './image/Logo.PNG'

function Header() {
  return (
    <>
            <img src={Logo} height="50px" width="150px" alt="Logo of Little lemon"/>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">HOME</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">ABOUT</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">MENU</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">RESERVATION</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">ORDER</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">LOGIN</a>
    </>
  );
}

export default Header;
