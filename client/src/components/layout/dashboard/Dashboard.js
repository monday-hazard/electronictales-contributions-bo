import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopicsList from "../../elements/topics/topics-list/TopicsList";
import Loader from "../../elements/loader/Loader";

import TltaSmall from '../../../resources/img/tlta.svg';
import RegularSmall from '../../../resources/img/regular.svg';

// Notification pictogramme
// import notificationPicto from '../../../resources/img/icons/notification.svg';
import logoutPicto from '../../../resources/img/icons/logout.svg';
import ideaPicto from '../../../resources/img/icons/idea.svg';
import ghostAvatar from '../../../resources/img/avatarghost.png';

// Social Icons

import facebookIcon from '../../../resources/img/icons/social-icons/facebook.svg';
import twitterIcon from '../../../resources/img/icons/social-icons/twitter.svg';
import githubIcon from '../../../resources/img/icons/social-icons/github.svg';
import linkedinIcon from '../../../resources/img/icons/social-icons/linkedin.svg';
import instagramIcon from '../../../resources/img/icons/social-icons/instagram.svg';
import slackIcon from '../../../resources/img/icons/social-icons/slack.svg';
import emailIcon from '../../../resources/img/icons/social-icons/email.svg';

import './Dashboard.css';
import TitleSection from '../../elements/page-section/title-section/TitleSection';
import Card from '../../elements/card/Card';
import CardContent from '../../elements/card/CardContent';

const Dashboard = ({ auth: { isAuthenticated, loading, user}, logout }) => {

   const [activeTab, setActiveTab] = useState('dashboard');

   const introTLTA =
   'C\'est un contenu pour le Tinder du dev : court, explicatif, imagé mais surtout court.';
   const introRegular =
      'C\'est un article plus long sans contraintes de longueur : long, détaillé, explicatif mais surtout long.';

   const urlTlta = 'https://platform.electronictales.io/modern-world/articles/le-code-coverage-cest-quoi'
   const urlRegular = "https://platform.electronictales.io/modern-world/articles/pourquoi-jai-envie-de-quitter-le-monde-de-la-tech-environ-dix-fois-par-mois"

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
               <li className={`settings-title${activeTab === "settings" ? ' active' : ''}`} onClick={activeTab !== "settings" ? () => setActiveTab('settings') : undefined}>Settings</li>
            </ul>
         </div>
         <div className="dashboard-content">
            <div className="top-content">
               <h2 className="pink-neon title-dashboard">Dashboard</h2>
               <ul className="dashboard-icons-nav">
                  {/* NOTIFICATION/BUTTON */}
                  {/* <li><a href="#"><img src={notificationPicto} /></a></li> */}
                  <li><Link onClick={logout} to="/"><img alt="Picto porte" src={logoutPicto} /></Link></li>
               </ul>
            </div>
            <div className="bottom-content">
               <div className="left-content">
                  <TitleSection inDashboard title="Sujets disponibles" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                  <section className="topic-info">
                     <Card isSquare>
                        <CardContent inDashboard  title="TooLateToAsk" text={introTLTA} srcImg={TltaSmall} alt="Pictogramme Smartphone" urlExample={urlTlta} />
                     </Card>
                     <Card isSquare>
                        <CardContent inDashboard title="Regular" text={introRegular} srcImg={RegularSmall} alt="Pictogramme stylo" urlExample={urlRegular} />
                     </Card>
                  </section>
                  <TopicsList />
               </div>
               <div className="right-content">
                  <div class="top">
                     <div class="topic-contrib">
                        <TitleSection inDashboard title="Topic" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                        <Link to="/post-topic">
                              <div>
                                 <TitleSection inDashboard title="Proposer un topic"/>
                                 <img src={ideaPicto} alt="Pictogramme ampoule"/>
                              </div>
                        </Link>
                     </div>
                     <div class="social-icons">
                        <div className="social-text-container">
                           <TitleSection inDashboard title="Social" subtitle="Lorem ipsum dolor sit amet."/>
                        </div>
                        <div className="social-icons-container">
                           <a href="mailto:contact@electronictales.io">
                              <img className="social-icon-footer" src={emailIcon} alt="Email" />
                           </a>
                           <a href="https://www.instagram.com/electronictales.io/">
                              <img className="social-icon-footer" src={instagramIcon} alt="Instagram" />
                           </a>
                           <a href="https://twitter.com/ElectronicTales">
                              <img className="social-icon-footer" src={twitterIcon} alt="Twitter" />
                           </a>
                           <a href="https://www.facebook.com/Electronic-Tales-100499265012350">
                              <img className="social-icon-footer" src={facebookIcon} alt="Facebook" />
                           </a>
                           <a href="https://www.linkedin.com/company/34911130">
                              <img className="social-icon-footer" src={linkedinIcon} alt="LinkedIn" />
                           </a>
                           <a href="https://github.com/OfficierAzarov/electronic-tales-presents">
                              <img className="social-icon-footer" src={githubIcon} alt="Github" />
                           </a>
                           <a href="http://platform.electronictales.io/safe-space/chat">
                              <img className="social-icon-footer" src={slackIcon} alt="Notre slack" />
                           </a>
                        </div>
                     </div>
                     <div class="easter-egg">
                        <a target="_blank" href="https://guthib.com/">Ne cliquez pas ici</a>
                     </div>
                  </div>
                  <div className="bottom">
                     <TitleSection inDashboard title="Activity" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                  </div>
               </div>
            </div>
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
