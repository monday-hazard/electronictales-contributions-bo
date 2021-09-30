import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const STYLES = [
    "btn-solid",
    "btn-outline"
]

const Button = ({
    children,
    buttonStyle,
    onClick
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    return (
        <div className={`btn ${checkButtonStyle}`} onClick={onClick}>
            {children}
        </div>
    )
}

Button.propTypes = {
    buttonStyle: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;