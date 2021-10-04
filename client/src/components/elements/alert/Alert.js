import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ghostIcon from '../../../resources/img/icons/ghost.png'
import './Alert.css';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
   <div key={alert.id} className={alert.alertType ? `alert ${alert.alertType}` : 'alert'}>
      {alert.alertType === 'error' && 
         (<img className="ghost-icon" src={ghostIcon} alt=""/>)}
      {alert.msg}
   </div>
))

Alert.propTypes = {
   alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
   alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
