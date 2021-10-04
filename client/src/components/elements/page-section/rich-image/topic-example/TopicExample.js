import React from "react";
import PropTypes from "prop-types";
import "./TopicExample.css";


const TopicExample = ({
   imgQuestionSrc,
   imgAlt,
   text,
   additionnalCssClass,
   urlExample
}) => {
   return (
      <div className={`question ${additionnalCssClass}`}>
         <a href={urlExample} target="_blank" rel="noreferrer">{text}</a>
         <img src={imgQuestionSrc} alt={imgAlt} />
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