import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from '../../elements/hero/Hero';
import PageSection from '../../elements/page-section/PageSection';
import homeImg1 from '../../../resources/img/imghome1.png';
import homeImg2 from '../../../resources/img/imghome2.png';

import './Landing.css';

const Landing = ({ isAuthenticated }) => {
   if (isAuthenticated) {
      return <Redirect to='/dashboard' />;
   }

   const titleText = 'Bienvenue dans le ';
   const styledTitleText = "Studio d'ElectronicTales";
   const styledTitleClass = 'site-name';
   const subtitleText =
      'Ici, on pose anonymement les questions techniques ou de computer culture qu\'on n\'ose plus poser 😳, mais on peut également prendre sa plume 🪶 la plus explicite pour <your-username>-splainer sur les sujets proposés par et pour la communauté Electronic Tales.';

   return (
      <div className="landing">
         <Hero
            titleText={titleText}
            styledTitleText={styledTitleText}
            styledTitleClass={styledTitleClass}
            subtitleText={subtitleText}
         />
         <PageSection imgLeft isTopic hasText imgSrc={homeImg1} />
         <PageSection imgSrc={homeImg2} />
      </div>
   );
};

Landing.propTypes = {
   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
