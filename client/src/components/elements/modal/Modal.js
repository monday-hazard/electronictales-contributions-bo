import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../../../redux/actions/modal';
import './Modal.css';

const Modal = ({ content, openModal, closeModal }) => {
   const { title, body, links } = content;

   // Source: https://stackoverflow.com/a/42234988
   const useOutsideCloser = (ref) => {
      useEffect(() => {
         const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
               close();
            }
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
      closeModal();
   }

   return (
      <Fragment>
         {openModal ?
            <div className="modal" ref={wrapperRef}>
               <h2>{title}</h2>
               <p>{body}</p>
            </div> :
            null}
      </Fragment>
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
