import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Modal = ({ modals }) => modals !== null && modals.length > 0 && modals.map(modal => (
   <div key={modal.id} className={`modal modal-${modal.modalType}`}>
      {modal.msg}
   </div>
))

Modal.propTypes = {
   modals: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
   modals: state.modal
});

export default connect(mapStateToProps)(Modal);