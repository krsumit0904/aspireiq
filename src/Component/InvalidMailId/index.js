import React from "react";
import PropTypes from "prop-types";
import styles from "./invalidMailId.module.css";

const InvalidMailId = ({ mailId }) => (
  <div className={styles.unverifiedWrapper}>
    <span className={styles.unverified}>
      {mailId}
    </span>
    <i className={`fa fa-exclamation ${styles.exclamation}`} />
  </div>

);

InvalidMailId.propTypes = {
  mailId: PropTypes.string.isRequired,
};

export default InvalidMailId;
