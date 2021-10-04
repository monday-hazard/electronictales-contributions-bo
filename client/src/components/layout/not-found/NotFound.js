import React from 'react';
import Card from '../../elements/card/Card'
import ghost from '../../../resources/img/icons/ghost.png'

import './NotFound.css';

const NotFound = () => {
   return (
      <div className='not-found-wrapper'>
         <h1 className=''>
            ⚡ Page Not Found ⚡
         </h1>
         <img src={ghost} alt='A screaming cute ghost' className='not-found-img' />
         <p className='not-found-text'>Relax, this page simply doesn't exist...</p>
         <p >... but you just found our 404 🥳</p>
      </div>
   );
};

export default NotFound;
