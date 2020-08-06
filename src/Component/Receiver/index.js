import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './receiver.module.css'

const Receiver = ({ }) => {
  return (
      <div className={styles.toBox}>
        <span className={styles.title}>To:</span>
      </div>
  );
}

Receiver.propTypes = {

};


export default Receiver
