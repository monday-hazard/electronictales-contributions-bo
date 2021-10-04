import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ title, isSquare, ...props }) => {
    return (
        <div className={'card' + `${isSquare ? ' square' : ''}`}>
            {props.children}
        </div>
    );
};

Card.propTypes = {
    isSquare: PropTypes.bool,
    title: PropTypes.string,
};

export default Card;
