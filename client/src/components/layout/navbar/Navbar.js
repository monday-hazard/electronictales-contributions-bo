import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../redux/actions/auth';

import './Navbar.css';

import logo from '../../../resources/img/logo-transparent-350.png';
import Button from '../../elements/button/Button';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
   const { pathname } = useLocation();
   const pathsWithoutNavbar = ['/dashboard'];

   const authLinks = (
      <ul>
         <li>
            <Link to="/">
               <Button onClick={logout} buttonStyle="btn-outline">Se déconnecter</Button>
            </Link>
         </li>
      </ul>
   )

   const guestLinks = (
      <ul>
         <li>
            <Link to="/login">
               <Button buttonStyle="btn-outline">Se connecter</Button>
            </Link>
         </li>
         <li>
            <Link to="/register">
               <Button>S'inscrire</Button>
            </Link>
         </li>
      </ul>
   )

   return (
      !pathsWithoutNavbar.includes(pathname)
      && <nav>
         <div id="logo">
            <Link to="/">
               <img src={logo} alt="Electronic&nbsp;Tales logo" />
            </Link>
         </div>
         {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
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
