import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import img from "../images/back.jpg"

function NavBar() {
  return (
    <div>
      <nav className="nav flex-spc-btwn">
      <img src={img}  alt='Map' className='map'/>
        <h3 className='logo'>Holiday Finder</h3>
        <div className="icons flex-spc-btwn">
          <div className="iconOne">
            <BiMicrophone />
          </div>
          <div className="iconTwo">
            <AiOutlineSetting />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;