import React from 'react';
import Title from '../Title';
import styles from './sender.module.css'

const Sender = () => {
  return (
    <div className={styles.fromBox}>
      <Title label="From:" />
    </div>
  );
}

export default Sender
