import React from 'react';
import Title from '../Title'
import styles from './subject.module.css'

const Subject = () => {
  return (
    <div className={styles.rootWrapper}>
      <Title label="Subject:" />
    </div>
  );
}

export default Subject
