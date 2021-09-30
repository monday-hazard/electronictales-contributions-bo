import React from "react";
import PropTypes from "prop-types";
import "./RichImage.css";
import homeImgPen from '../../../../resources/img/imgpen.png'
import homeImgOrdi from '../../../../resources/img/imgordi.png'
import TopicExample from "./topic-example/TopicExample";


const RichImage = ({
    imgSrc
}) => {
    return (
        <div className="picture-content">
            <img src={imgSrc} />
            <TopicExample additionnalCssClass="question1" imgQuestionSrc={homeImgPen} text="C'est quoi npm ?" />
            <TopicExample additionnalCssClass="question2" imgQuestionSrc={homeImgOrdi} text="What the hell is npm ?" />
        </div>
    )
}

RichImage.propTypes = {
    imgSrc: PropTypes.string,
}

export default RichImage;