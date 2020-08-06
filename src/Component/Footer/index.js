import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './sender.module.css'
import 'font-awesome/css/font-awesome.min.css';

const Sender = ({ }) => {
  return (
    <div className={styles.rootWrapper}>
    <div className={styles.iconGroupWrapper}>
      <i className="fa fa-smile-o" />
      <i className="fa fa-paperclip" />
      <i className="fa fa-pencil" />
    </div>
    <button className={styles.submitBtn}> Send </button>
    </div>
  );
}

Sender.propTypes = {

};


export default Sender
