import React from "react";
import PropTypes from "prop-types";
import styles from "./validMailId.module.css";

const ValidMailId = ({ mailId, removeMailId }) => (
  <div className={styles.verifiedWrapper}>
    <span className={styles.verified}>
      {mailId}
    </span>
    <i className={`fa fa-times ${styles.cross}`} onClick={() => removeMailId(mailId)} />
  </div>

);

ValidMailId.propTypes = {
  mailId: PropTypes.string.isRequired,
  removeMailId: PropTypes.func.isRequired,
};

export default ValidMailId;
