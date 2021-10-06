import React, { useState, useEffect } from 'react';
import { getArticlesByUser } from '../../../../redux/actions/article';
import { connect } from 'react-redux';

const DashboardActivity = ({
    getArticlesByUser,
    article: { articles },
    userId,
}) => {
    useEffect(() => {
        getArticlesByUser(userId);
    }, [getArticlesByUser]);

    console.log('articles returned');
    console.log(articles); // TODO
    return (
        <>
            <div className="bottom-content">Koukou World</div>
        </>
    );
};

const mapStateToProps = (state) => ({
    article: state.article,
});

export default connect(mapStateToProps, { getArticlesByUser })(
    DashboardActivity
);
