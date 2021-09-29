import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

function Card({ title, isSquare, ...props }) {
    return (
        <div className={'card' + `${isSquare ? ' square' : ''}`}>
            <span className="card-title">{title}</span>
            {props.children}
        </div>
    );
}

Card.propTypes = {
    isSquare: PropTypes.bool,
    title: PropTypes.string,
};

export default Card;
