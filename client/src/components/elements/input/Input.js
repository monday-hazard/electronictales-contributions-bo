import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import imgTltaSmallWording from "../../../resources/img/tlta-wording.svg";
import imgRegularSmallWording from "../../../resources/img/regular-wording.svg"
import imgAnySmallWording from "../../../resources/img/any.svg"

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
         {props.type === 'radio' && props.value === 'TLTA'
            ? <img src={imgTltaSmallWording} className={`imgContrib ${checked ? 'checked' : 'unchecked'}`} alt="Smartphone with tinder -ish icon" />
            : (props.value === 'regular') ? <img src={imgRegularSmallWording} className={`imgContrib ${checked ? 'checked' : 'unchecked'}`} alt="A pencil" />
               : (props.value === 'any') ? <img src={imgAnySmallWording} className={`imgContrib ${checked ? 'checked' : 'unchecked'}`} alt="A person who does not care" />
                  : ''
         }
         <input
            {...props}
         />
         {props.type === 'checkbox' && (
            <Fragment>
               <span className="checkmark"></span>
               <p className='text-checkbox-remember-me'>{props.labelText}</p>
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