import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopicsOpen } from '../../../../redux/actions/topic';
import Loading from '../../loader/Loader';
import TopicCard from '../TopicCard';


import './TopicsList.css';

const TopicsList = ({ getTopicsOpen, topic: { topics, loading } }) => {
   useEffect(() => {
      getTopicsOpen();
   }, [getTopicsOpen]);


   return loading ? <Loading /> :
      <div className="topics-list">
         {topics
            .sort((a, b) => b.priority - a.priority)
            .map(topic => (
               <TopicCard key={topic._id} topic={topic} />
            ))}
      </div>
}

TopicsList.propTypes = {
   getTopicsOpen: PropTypes.func.isRequired,
   topic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   topic: state.topic
})

export default connect(mapStateToProps, { getTopicsOpen })(TopicsList);
