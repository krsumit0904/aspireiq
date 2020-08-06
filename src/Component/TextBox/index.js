import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './textbox.module.css'

const TextBox = ({ }) => {
  return (
    <div className={styles.rootWrapper}>
      <span className={styles.title}>Enter your message...</span>
    </div>
  );
}

TextBox.propTypes = {

};


export default TextBox
