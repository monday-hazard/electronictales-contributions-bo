import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Input.css';


const Input = ({ label = {}, onlyText, checked, ...props }) => {

    let containerCssClass = '';

    switch (props.type) {
        case "submit":
            containerCssClass = 'form-footer'
            break;
        case "checkbox":
            containerCssClass = 'checkbox-container'
            break;
        default:
            containerCssClass = 'form-group input-container'
    }

    return (
        
        <div className={containerCssClass} onClick={props.onClick}>
            {label && label.position === 'before' && (
                <label className={label.className} htmlFor={label.htmlFor}>{label.labelText}</label>
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
            {props.type === 'checkbox' && (
                <Fragment>
                    <span class="checkmark"></span>
                    <div className='text-checkbox-remember-me'>Se souvenir de moi</div>
                </Fragment>
            )}
            {label && label.position === 'after' && (
                <label className={label.className} htmlFor={label.htmlFor}>{label.labelText}</label>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.object,
};

export default Input;