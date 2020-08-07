import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css'

const Title = ({ label }) => {
  return (
    <span className={styles.title}>{label}</span>
  );
}

Title.propTypes = {
  label: PropTypes.string.isRequired,
};


export default Title
