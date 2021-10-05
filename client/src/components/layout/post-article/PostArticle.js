import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PostArticle.css';

const PostArticle = ({ isAuthenticated }) => {

   return (
      <div className="post-article">
         {/* <Hero titleText={titleText} subtitleText={subtitleText} />
         <section className="container-topic topic-info">
            <Card isSquare>
               <CardContent title="TooLateToAsk" text={introTLTA} srcImg={TltaSmall} alt="Pictogramme Smartphone" urlExample={urlTlta} />
            </Card>
            <Card isSquare>
               <CardContent title="Regular" text={introRegular} srcImg={RegularSmall} alt="Pictogramme stylo" urlExample={urlRegular} />
            </Card>
         </section>
         <section className="container-topic"><TopicForm /></section>
         <Modal
            content={POST_TOPIC_SUCCESS_MODAL_CONTENT}
            redirectPath={isAuthenticated ? '/dashboard' : '/'}
         /> */}
      </div>
   );
};

PostArticle.propTypes = {
   isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PostArticle);
