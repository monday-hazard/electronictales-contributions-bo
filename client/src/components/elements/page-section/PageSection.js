import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./PageSection.css";
import RichImage from "./rich-image/RichImage";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import TitleSection from "./title-section/TitleSection";
import TextSection from "./text-section/TextSection";
import TopicsList from "../topics/topics-list/TopicsList";


const PageSection = ({
    imgSrc,
    imgLeft,
    hasText,
    isTopic
}) => {
    return (
        <section className="container section-home">
            {imgLeft && <RichImage isTopicSection imgSrc={imgSrc} />}
            <div className="text-content">
                {isTopic 
                ? <TitleSection title="Proposer un topic" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                : <TitleSection title="Rédiger un article" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                }
                {hasText
                ? <Fragment>
                    <TextSection textSection="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at maximus ante. Morbi pretium vel diam in dignissim. Etiam auctor turpis quis justo sodales mattis. Phasellus tristique tincidunt quam, ac." />
                    <TextSection textSection="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at maximus ante. Morbi pretium vel diam in dignissim. Etiam auctor turpis quis justo sodales mattis. Phasellus tristique tincidunt quam, ac." />
                    <Link to="/post-topic">
                        <Button>Let's go !</Button>
                    </Link>
                </Fragment>
                : <TopicsList />
                }
            </div>
            {imgLeft || <RichImage imgSrc={imgSrc}/>}
        </section>
    )
}

PageSection.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgLeft: PropTypes.bool,
    hasText: PropTypes.bool,
    isTopic: PropTypes.bool
}

export default PageSection;