import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './subject.module.css'

const Subject = ({ }) => {
  return (
    <div className={styles.rootWrapper}>
      <span className={styles.title}>Subject:</span>
    </div>
  );
}

Subject.propTypes = {

};


export default Subject
