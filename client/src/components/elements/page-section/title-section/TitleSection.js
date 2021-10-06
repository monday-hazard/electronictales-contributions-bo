import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./TitleSection.css";


const TitleSection = ({
    title,
    subtitle,
    inDashboard
}) => {
    return (
        <Fragment>
            {inDashboard
                ? <h2 className="h2-dashboard-style">{title}</h2>
                : <h2 className="h2-section-style">{title}</h2>
            }
            <p className="subtitle">{subtitle}</p>
        </Fragment>
    )
}

TitleSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    inDashboard: PropTypes.bool
}

export default TitleSection;