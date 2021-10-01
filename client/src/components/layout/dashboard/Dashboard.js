import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Dashboard.css';

const Dashboard = ({ auth: { user }, }) => {
   return (
      <div className="dashboard">
         <h2>Ma loge</h2>
         <h4>( oui, {user.userName}, on sait que c'est un bête dashboard, mais justement ... )</h4>
      </div>
   );
};

Dashboard.propTypes = {
   auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
   auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
