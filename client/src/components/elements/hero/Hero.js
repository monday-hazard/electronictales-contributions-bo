import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DoubleChevronDown } from '../../../resources/img/icons/double-chevron-down.svg';
import './Hero.css';

const Hero = ({
    disableSubtitle,
    styledTitleText,
    styledTitleClass,
    subtitleText,
    titleText,
}) => {
    return (
        <>
            <div className="hero-wrapper">
                <h1 className="hero-title">
                    {titleText}
                    {styledTitleText && styledTitleClass && (
                        <span className={styledTitleClass}>
                            {styledTitleText}
                        </span>
                    )}
                </h1>
                {!disableSubtitle && (
                    <div className="hero-subtitle container-narrow">
                        {subtitleText}
                    </div>
                )}
                <DoubleChevronDown className="hero-chevron" />
            </div>
        </>
    );
};

Hero.propTypes = {
    disableSubtitle: PropTypes.bool,
    styledTitleText: PropTypes.string,
    styledTitleClass: PropTypes.string,
    titleText: PropTypes.string.isRequired,
    subtitleText: PropTypes.string,
};

export default Hero;
