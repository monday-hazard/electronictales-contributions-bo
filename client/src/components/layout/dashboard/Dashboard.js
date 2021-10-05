import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../elements/button/Button';
import TopicsList from '../../elements/topics/topics-list/TopicsList'

import './Dashboard.css';

const Dashboard = ({ auth: { isAuthenticated, loading }, logout }) => {
   return (
      <div className="dashboard">
         <h2>Dashboard</h2>
         <Link to="/">
            <TopicsList />
            <Button onClick={logout} buttonStyle="btn-outline">Se déconnecter</Button>
         </Link>
      </div>
   );
};

Dashboard.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   auth: state.auth
})

export default connect(mapStateToProps, { logout })(Dashboard);
