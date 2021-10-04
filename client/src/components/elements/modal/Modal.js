import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { closeModal } from '../../../redux/actions/modal';

import './Modal.css';

const Modal = ({ content, redirectPath, openModal, closeModal }) => {
   const { title, body, links } = content;
   const [redirect, setRedirect] = useState(false);

   // Inspiration : https://stackoverflow.com/a/42234988
   const useOutsideCloser = (ref) => {
      useEffect(() => {
         const handleClickOutside = () => {
            if (ref.current) close();
         }
         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref]);
   }

   const wrapperRef = useRef(null);
   useOutsideCloser(wrapperRef);

   const close = () => {
      // TODO : add spinner loader during redirection
      setRedirect(true);
      closeModal();
   }

   return (
      <>
         {openModal && (
            <div className="modal" ref={wrapperRef}>
               <h2>{title}</h2>
               <p>{body}</p>
            </div>
         )}
         {redirect && (
            <Redirect to={redirectPath} />
         )}
      </>
   )
}

Modal.propTypes = {
   content: PropTypes.object.isRequired,
   openModal: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
   openModal: state.modal.openModal
});

export default connect(mapStateToProps, { closeModal })(Modal);
