import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import './styles/navbar.css';
import arrowBack from '../images/arrow-back-removebg-.png';

function Header() {
  const location = useLocation();
  const showHeader = !location.pathname.includes('/holidays/');

  return (
    <>
      {showHeader && (
        <div className="navbar" data-testid="navbar">
          <NavBar />

        </div>
      )}
      <div className="back-home">
        <NavLink to="/" className="link-back">
          {location.pathname !== '/' && <img src={arrowBack} alt="back" className="back-btn" />}
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
