import React from 'react';

import './Navbar.css';

import logo from '../../../resources/img/logo-transparent-350.png';

const Navbar = () => {
   return (
      <nav>
         <div id="logo">
            <a href="/">
               <img src={logo} alt="Electronic&nbsp;Tales logo" />
            </a>
         </div>
      </nav>
   );
}

export default Navbar;
