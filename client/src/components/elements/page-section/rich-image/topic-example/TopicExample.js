import React from "react";
import PropTypes from "prop-types";
import "./TopicExample.css";


const TopicExample = ({
    imgQuestionSrc,
    text,
    additionnalCssClass
}) => {
    return (
        <div className={`question ${additionnalCssClass}`}>
            <p>{text}</p>
            <img src={imgQuestionSrc} />
        </div>
    )
}

TopicExample.propTypes = {
    imgQuestionSrc: PropTypes.string,
    textSrc: PropTypes.string
}

export default TopicExample;