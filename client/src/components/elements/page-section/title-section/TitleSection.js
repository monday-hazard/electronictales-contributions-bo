import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./TitleSection.css";


const TitleSection = ({
    title,
    subtitle
}) => {
    return (
        <Fragment>
            <h2 className="h2-section-style">{title}</h2>
            <p className="subtitle">{subtitle}</p>
        </Fragment>
    )
}

TitleSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default TitleSection;