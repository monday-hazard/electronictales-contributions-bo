import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import logo from '../../../resources/img/logo-transparent-350.png';

const Navbar = () => {
   return (
      <nav>
         <div id="logo">
            <Link to="/">
               <img src={logo} alt="Electronic&nbsp;Tales logo" />
            </Link>
         </div>
         <div className="nav-links">
            <div id="register">
               <Link to="/register">
                  Register
               </Link>
            </div>
            <div id="login">
               <Link to="/login">
                  Log in
               </Link>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
