import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input({ ...props }) {
    return <input className="styled-input" {...props} />;
}

export default Input;
