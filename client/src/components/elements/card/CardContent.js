import React from 'react';
import PropTypes from 'prop-types';

import './CardContent.css';

const CardContent = ({ text, title, srcImg, alt, urlExample }) => {
   return <div className="card-content">
      <h3 className="title-contribution">{title}</h3>
      <img src={srcImg} alt={alt} />
      <p className="text-contribution">{text}</p>
      <a href={urlExample} target="_blank" rel="noreferrer">Un exemple ?</a>
   </div >;
};

CardContent.propTypes = {
   text: PropTypes.string,
   title: PropTypes.string,
   srcImg: PropTypes.string,
   alt: PropTypes.string,
   urlExample: PropTypes.string
};

export default CardContent;
