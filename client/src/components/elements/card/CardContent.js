import React from 'react';
import PropTypes from 'prop-types';

import './CardContent.css';

const CardContent = ({ text }) => {
    return <div className="card-content">{text}</div>;
};

CardContent.propTypes = {
    text: PropTypes.string,
};

export default CardContent;
