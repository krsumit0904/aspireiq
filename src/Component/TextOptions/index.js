import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './textOptions.module.css'
import 'font-awesome/css/font-awesome.min.css';

const TextOptions = ({ }) => {
  return (
    <div className={styles.rootWrapper}>
      <div>
        <span>
          Normal text
        </span>
        <i className={`fa fa-caret-down ${styles.grayColor}`} />
      </div>
      <div className={styles.verticalLine}>&nbsp;</div>
      <div>
        <i className={`fa fa-bold ${styles.grayColor}`} />
        <i className={`fa fa-italic ${styles.grayColor}`} />
        <i className={`fa fa-ellipsis-h ${styles.grayColor}`} />
      </div>
      <div className={styles.verticalLine}>&nbsp;</div>
      <div>
        <i className={`fa fa-font ${styles.grayColor}`} />
      </div>
      <div className={styles.verticalLine}>&nbsp;</div>
      <div>
        <i className={`fa fa-list ${styles.grayColor}`} />
        <i className={`fa fa-list-ol ${styles.grayColor}`} />
      </div>
      <div className={styles.verticalLine}>&nbsp;</div>
      <div>
        <i className={`fa fa-link ${styles.grayColor}`} />
        <i className={`fa fa-picture-o ${styles.grayColor}`} />
        <i className={`fa fa-quote-right ${styles.grayColor}`} />
      </div>
    </div>
  );
}

TextOptions.propTypes = {

};


export default TextOptions
