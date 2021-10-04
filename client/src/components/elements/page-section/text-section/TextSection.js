import React from "react";
import PropTypes from "prop-types";
import "./TextSection.css";


const TextSection = ({
   textSection,
}) => {
   return (
      <p className="text">{textSection}</p>
   )
}

TextSection.propTypes = {
   textSection: PropTypes.string,
}

export default TextSection;