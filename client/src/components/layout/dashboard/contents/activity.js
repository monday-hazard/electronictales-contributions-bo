import React, { useState, useEffect } from 'react';
import { getArticlesByUser } from '../../../../redux/actions/article';
import { connect } from 'react-redux';

const DashboardActivity = ({
    getArticlesByUser,
    article: { articlesByUser },
    userId,
}) => {
    useEffect(() => {
        getArticlesByUser(userId);
    }, [getArticlesByUser]);

    console.log('articles returned');
    console.log(articlesByUser); // TODO
    return (
        <>
            <div className="bottom-content">

            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    article: state.article,
});

export default connect(mapStateToProps, { getArticlesByUser })(
    DashboardActivity
);
