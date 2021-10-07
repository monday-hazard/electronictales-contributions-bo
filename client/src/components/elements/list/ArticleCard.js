import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import penPicto from '../../../resources/img/icons/pen.svg';
// TODO : eye picto instead for "view the article"

import './ArticleCard.css';

/* TODO :
refacto with TopicCard + TopicList to have one common
list with card elements
*/

const ArticleCard = ({
    article: { _id, publicationDate, title, type, slug, status, world },
}) => {
    const { pathname } = useLocation();
    const articleCardLink =
        pathname === '/'
            ? '/login'
            : `https://platform.electronictales.io/${world}/articles/${slug}`;
    const articleType = type === 'regular' ? 'Article' : 'TLTA';

    const handleSelectTopic = (e) => {
        e.preventDefault();
        localStorage.setItem('articleId', _id);
    };

    return (
        <div className="article-card">
            <div className="left-article-card">
                <div>
                    <p>{title}</p>
                    <div className="type-label">{articleType}</div>
                </div>
            </div>
            <div
                className="pen-picto-container"
                onClick={(e) => handleSelectTopic(e)}
            >
                <Link to={articleCardLink}>
                    <img className="pen-picto" src={penPicto} alt="A pen" />
                </Link>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
};

export default connect(null, {})(ArticleCard);
