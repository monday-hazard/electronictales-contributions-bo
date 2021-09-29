import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ label = {}, ...props }) => {
    return (
        <>
            {label && <label htmlFor={label.htmlFor}>{label.labelText}</label>}
            <input className="styled-input" {...props} />
        </>
    );
};

Input.propTypes = {
    label: PropTypes.object,
};

export default Input;
