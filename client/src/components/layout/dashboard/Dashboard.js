import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from "../../elements/loader/Loader";

// Notification pictogramme
// import notificationPicto from '../../../resources/img/icons/notification.svg';
import logoutPicto from '../../../resources/img/icons/logout.svg';
import ghostAvatar from '../../../resources/img/avatarghost.png';

import './Dashboard.css';

import DashboardHome from './contents/Home';
import DashboardActivity from './contents/Activity';

const Dashboard = ({ auth: { isAuthenticated, loading, user }, logout }) => {

   const userEmail = user ? user.email : "(｡◕‿◕｡)";
   const userId = user ? user._id : undefined;

   const [activeTab, setActiveTab] = useState('dashboard');
   const [tabTitle, setTabTitle] = useState('dashboard');

   useEffect(() => {
      switch (activeTab) {
         case "activity":
            setTabTitle('activite')
            break;
         case "settings":
            setTabTitle('settings')
            break;
         default:
            setTabTitle('dashboard');
      }
   }, [activeTab])

   return (
      loading ? <Loader /> :
         <div className="dashboard">
            <div className="dashboard-sidebar">
               <div className="user-information">
                  <div>
                     <img className="usermane-img" src={ghostAvatar} alt='petit fantome' />
                  </div>
                  <p className="username">{user ? user.userName : "(｡◕‿◕｡)"}</p>
            </div>
            <ul className="dashboard-navigation">
               <li className={`dashboard-title${activeTab === "dashboard" ? ' active' : ''}`} onClick={activeTab !== "dashboard" ? () => setActiveTab('dashboard') : undefined}>Dashboard</li>
               <li className={`activity-title${activeTab === "activity" ? ' active' : ''}`} onClick={activeTab !== "activity" ? () => setActiveTab('activity') : undefined}>Activité</li>
               <li className={`settings-title${activeTab === "settings" ? ' active' : ''}`} onClick={activeTab !== "settings" ? () => setActiveTab('settings') : undefined}>Settings</li>
            </ul>
         </div>
         <div className="dashboard-content">
            <div className="top-content">
               <h2 className="pink-neon title-dashboard">{tabTitle}</h2>
               <ul className="dashboard-icons-nav">
                  {/* NOTIFICATION/BUTTON */}
                  {/* <li><a href="#"><img src={notificationPicto} /></a></li> */}
                  <li><Link onClick={logout} to="/"><img alt="Picto porte" src={logoutPicto} /></Link></li>
               </ul>
            </div>
            {activeTab === "dashboard" && <DashboardHome userEmail={userEmail}/>}
            {activeTab === "activity" && <DashboardActivity user={{ userEmail, userId }}/>}
         </div>
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
