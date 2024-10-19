import React from 'react';
import './Header.css';
import logo from '../Components/logo.png'
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <button className="button">
          <a className='text-logo' href=""><BsTwitterX /></a>
          <a className='text-logo' href=""><BiLogoTelegram /></a>
          Join us!
        </button>

        <div className="logo">
          <div className="logo-circle">
            <img 
              src={logo} 
              alt="Frog" 
              style={{ width: 32, height: 32 }}
            />
          </div>
          <span className="logo-text">TRAVEL FROG</span>
        </div>

        <button className="button">
          Whitepaper
          <a className='text-logo' href=""><IoArrowRedoCircleOutline /></a>
        </button>
      </div>
    </header>
  );
};

export default Header;