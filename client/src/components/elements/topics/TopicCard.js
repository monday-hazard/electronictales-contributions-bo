import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TopicCard = ({ topic: { _id, name, type, priority } }) => {
   return (
      // TODO : add write-article route to Link

      <div className="topic-card">
         <p>{name}</p>
         <div className='type-label'>{type}</div>
         {priority &&
            <p className="emoji">🔥</p>
         }
         <Link to="#"><p className="emoji">✍️</p></Link>
      </div>
   )
};

TopicCard.propTypes = {
   topic: PropTypes.object.isRequired,
};

export default connect(null, {})(TopicCard);
