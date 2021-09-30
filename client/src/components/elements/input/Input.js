import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ label = {}, onlyText, checked, ...props }) => {
    return (
        <div className="input-wrapper" onClick={props.onClick}>
            <div></div>
            {label && label.position === 'before' && (
                <label htmlFor={label.htmlFor}>{label.labelText}</label>
            )}
            {props.type === 'radio' && (
                <span className="radio-button-icon">
                    <span
                        className={`${checked ? 'checked' : 'unchecked'}`}
                    ></span>
                </span>
            )}
            <input
                className={'input' + `${!onlyText ? ' styled-input' : ''}`}
                {...props}
            />
            {label && label.position !== 'before' && (
                <label htmlFor={label.htmlFor}>{label.labelText}</label>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.object,
};

export default Input;
