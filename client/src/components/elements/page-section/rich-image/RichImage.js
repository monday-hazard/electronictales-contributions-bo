import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./RichImage.css";
import homeImgPen from '../../../../resources/img/imgpen.png'
import homeImgOrdi from '../../../../resources/img/imgordi.png'
import TopicExample from "./topic-example/TopicExample";


const RichImage = ({
    imgSrc,
    isTopicSection
}) => {
    return (
        <div className="picture-content">
            <img src={imgSrc} className="image-section"/>
            {isTopicSection &&
                <Fragment>
                    <TopicExample 
                        additionnalCssClass="question1" 
                        imgQuestionSrc={homeImgPen} 
                        text="L'i18n c'est quoi ?" 
                        urlExample="https://platform.electronictales.io/modern-world/articles/i18n-cest-quoi" 
                    />
                    <TopicExample 
                        additionnalCssClass="question2" 
                        imgQuestionSrc={homeImgOrdi} 
                        text="Un test unitaire, c'est quoi ?"
                        urlExample="https://platform.electronictales.io/modern-world/articles/un-test-unitaire-cest-quoi"
                    />
                </Fragment>
            }
            {isTopicSection || 
                <Fragment>
                    <TopicExample 
                        additionnalCssClass="question1" 
                        imgQuestionSrc={homeImgPen} 
                        text="Une pulp fiction, c'est quoi ?" 
                        urlExample="https://platform.electronictales.io/imaginarium/articles/une-pulp-fiction-cest-quoi" 
                    />
                    <TopicExample 
                        additionnalCssClass="question2" 
                        imgQuestionSrc={homeImgOrdi} 
                        text="Vous avez dit méritocratie ?"
                        urlExample="https://platform.electronictales.io/modern-world/articles/vous-avez-dit-meritocratie-meme-pour-les-femmes"
                    />
                </Fragment>
            }
        </div>
    )
}

RichImage.propTypes = {
    imgSrc: PropTypes.string,
}

export default RichImage;