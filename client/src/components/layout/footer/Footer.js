import React from 'react';
import { useLocation } from 'react-router-dom';

import facebookIcon from '../../../resources/img/icons/social-icons/facebook.svg';
import twitterIcon from '../../../resources/img/icons/social-icons/twitter.svg';
import githubIcon from '../../../resources/img/icons/social-icons/github.svg';
import linkedinIcon from '../../../resources/img/icons/social-icons/linkedin.svg';
import instagramIcon from '../../../resources/img/icons/social-icons/instagram.svg';
import slackIcon from '../../../resources/img/icons/social-icons/slack.svg';
import emailIcon from '../../../resources/img/icons/social-icons/email.svg';

import "./Footer.css";

const Footer = (props) => {
   const { pathname } = useLocation();
   const pathsWithoutNavbar = ['/dashboard'];

   return (
      !pathsWithoutNavbar.includes(pathname)
      && <footer>

         <p>Made with &#10084; by Electronic&nbsp;Tales Team</p>
         <div className="social-list">
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
      </footer>
   );
};

export default Footer;
