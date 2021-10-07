import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getArticlesByUser } from '../../../../redux/actions/article';
import { getTopicsByUser } from '../../../../redux/actions/topic';
import { connect } from 'react-redux';

import ArticleCard from '../../../elements/list/ArticleCard';
import TitleSection from '../../../elements/page-section/title-section/TitleSection';
import TopicCard from '../../../elements/topics/TopicCard';

const DashboardActivity = ({
    getArticlesByUser,
    getTopicsByUser,
    article: { articlesByUser },
    topic: { topicsByUser },
    user: { userEmail, userId },
}) => {
    useEffect(() => {
        getArticlesByUser(userId);
    }, [getArticlesByUser]);

    useEffect(() => {
        getTopicsByUser(userEmail);
    }, [getTopicsByUser]);

    console.log('articles returned');
    console.log(articlesByUser); // TODO

    return (
        <>
            <div className="bottom-content">
                <TitleSection inDashboard title="Articles rédigés" />
                {articlesByUser.length > 0 ? (
                    articlesByUser.map((article) => (
                        <ArticleCard key={article._id} article={article} />
                    ))
                ) : (
                    <span>Tu n'as rédigé aucun article pour le moment</span>
                )}
                <TitleSection inDashboard title="Sujets proposés" />
                {topicsByUser.length > 0 ? (
                    topicsByUser.map((topic) => (
                        <TopicCard key={topic._id} topic={topic} />
                    ))
                ) : (
                    <span>Tu n'as proposé aucun sujet pour le moment</span>
                )}
            </div>
        </>
    );
};

DashboardActivity.propTypes = {
    getArticlesByUser: PropTypes.func.isRequired,
    getTopicsByUser: PropTypes.func.isRequired,
    // TODO add the other properties ?
};

const mapStateToProps = (state) => ({
    article: state.article,
    topic: state.topic,
});

export default connect(mapStateToProps, { getArticlesByUser, getTopicsByUser })(
    DashboardActivity
);
