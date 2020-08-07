import React from 'react';
import PropTypes from 'prop-types';
import styles from './validMailId.module.css'

const ValidMailId = ({ mailId, index, removeMailId }) => {
  return (
    <div className={styles.verifiedWrapper}>
      <span className={styles.verified}>
        {mailId}
      </span>
      <i className={`fa fa-times ${styles.cross}`} onClick={() => removeMailId(index)} />
    </div>

  );
}

ValidMailId.propTypes = {
  mailId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  removeMailId: PropTypes.func.isRequired,
};


export default ValidMailId
