import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './CardContent.css';

const CardContent = ({ text, title, srcImg, alt, urlExample, inDashboard }) => {
   return <Fragment>
   {inDashboard
      ?  
      <div className="card-content-dashboard">
            <img src={srcImg} alt={alt} />
            <div>
               <h3 className="title-contribution">{title}</h3>
               <p className="text-contribution">{text}</p>
               <a href={urlExample} target="_blank" rel="noreferrer">Un exemple ?</a>
            </div>
      </div>
      : 
      <div className="card-content">
         <h3 className="title-contribution">{title}</h3>
         <img src={srcImg} alt={alt} />
         <p className="text-contribution">{text}</p>
         <a href={urlExample} target="_blank" rel="noreferrer">Un exemple ?</a>
      </div>
   }
   </Fragment >;
};

CardContent.propTypes = {
   text: PropTypes.string,
   title: PropTypes.string,
   srcImg: PropTypes.string,
   alt: PropTypes.string,
   urlExample: PropTypes.string,
   inDashboard: PropTypes.bool
};

export default CardContent;
