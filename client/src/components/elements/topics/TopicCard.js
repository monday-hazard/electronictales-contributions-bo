import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import firePicto from '../../../resources/img/icons/fire.svg';
import penPicto from '../../../resources/img/icons/pen.svg';

import './TopicCard.css'

const TopicCard = ({ topic: { _id, name, type, priority } }) => {
   return (
      // TODO : add write-article route to Link
      <div className="topic-card">
         <div className="left-topic-card">
            {priority &&
               <img className="fire-picto" src={firePicto} alt="fire pictogram" />
            }
            <div>
               <p>{name}</p>
               <div className='type-label'>{type}</div>
            </div>
         </div>
         <div className="pen-picto-container">
            <Link to="#"><img className="pen-picto" src={penPicto} alt="A pen" /></Link>
         </div>
      </div>
   )
};

TopicCard.propTypes = {
   topic: PropTypes.object.isRequired,
};

export default connect(null, {})(TopicCard);
