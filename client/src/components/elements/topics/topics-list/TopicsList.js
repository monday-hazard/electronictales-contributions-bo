import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopics } from '../../../../redux/actions/topic';
import Loading from '../../loader/Loader';
import TopicCard from '../TopicCard';


import './TopicsList.css';

const TopicsList = ({ getTopics, topic: { topics, loading } }) => {
   useEffect(() => {
      getTopics();
   }, [getTopics]);

   return loading ? <Loading /> :
      <div className="topics-list">
         {topics.map(topic => (
            <TopicCard key={topic._id} topic={topic} />
         ))}
      </div>
}

TopicsList.propTypes = {
   getTopics: PropTypes.func.isRequired,
   topic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   topic: state.topic
})

export default connect(mapStateToProps, { getTopics })(TopicsList);
