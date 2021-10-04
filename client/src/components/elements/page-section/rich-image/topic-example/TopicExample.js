import React from "react";
import PropTypes from "prop-types";
import "./TopicExample.css";


const TopicExample = ({
    imgQuestionSrc,
    text,
    additionnalCssClass,
    urlExample
}) => {
    return (
        <div className={`question ${additionnalCssClass}`}>
            <a target="_blank" href={urlExample}>{text}</a>
            <img src={imgQuestionSrc} />
        </div>
    )
}

TopicExample.propTypes = {
    imgQuestionSrc: PropTypes.string,
    textSrc: PropTypes.string,
    additionnalCssClass: PropTypes.string,
    urlExample: PropTypes.string
}

export default TopicExample;