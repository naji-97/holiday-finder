import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import './styles/navbar.css';

function Header() {
  const location = useLocation();
  const showHeader = !location.pathname.includes('/holidays/');

  return (
    <>
      {showHeader && (
        <div className="navbar">
          <NavBar />

        </div>
      )}
      <NavLink to="/" className="link-back">
        {location.pathname !== '/' && <FiChevronLeft className="back-btn" />}
      </NavLink>

      <Outlet />
    </>
  );
}

export default Header;
