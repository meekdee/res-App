import React from 'react';
import './Header.css';
import Logo from './image/Logo.PNG'
// import { VStack } from "@chakra-ui/react";

function Header() {
  return (
    <div>
        {/* <VStack spacing={20} > */}
            <img src={Logo} height="70px" width="150px" alt="Logo of Little lemon"/>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">HOME</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">ABOUT</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">MENU</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">RESERVATION</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">ORDER</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">LOGIN</a>
        {/* </VStack> */}
    </div>
  );
}

export default Header;
