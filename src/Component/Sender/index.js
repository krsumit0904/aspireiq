import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './sender.module.css'

const Sender = ({ }) => {
  return (
    <div className={styles.fromBox}>
      <span className={styles.title}>From:</span>
    </div>
  );
}

Sender.propTypes = {

};


export default Sender
