import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../redux/actions/auth'

import './Navbar.css';

import logo from '../../../resources/img/logo-transparent-350.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
   const authLinks = (
      <ul>
         <li>
            <a onClick={logout} href="#!">Logout</a>
         </li>
      </ul>
   )

   const guestLinks = (
      <ul>
         <li>
            <Link to="/register">
               Register
            </Link>
         </li>
         <li>
            <Link to="/login">
               Log in
            </Link>
         </li>
      </ul>
   )

   return (
      <nav>
         <div id="logo">
            <Link to="/">
               <img src={logo} alt="Electronic&nbsp;Tales logo" />
            </Link>
         </div>
         {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
         <div className="nav-links">

         </div>
      </nav>
   );
}

Navbar.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
