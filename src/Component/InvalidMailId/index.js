import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./invalidMailId.module.css";

const InvalidMailId = ({ mailId, index, removeMailId }) => {
  const [iconClass, setIconClass] = useState(`fa fa-exclamation ${styles.exclamation}`);

  return (
    <div className={styles.unverifiedWrapper}>
      <span className={styles.unverified}>
        {mailId}
      </span>
      <i
        className={iconClass}
        onMouseOver={() => setIconClass(`fa fa-times ${styles.cross}`)}
        onMouseOut={() => setIconClass(`fa fa-exclamation ${styles.exclamation}`)}
        onMouseDown
        onClick={iconClass === `fa fa-times ${styles.cross}`
          ? () => removeMailId(index)
          : ""}
      />
    </div>

  );
};

InvalidMailId.propTypes = {
  mailId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  removeMailId: PropTypes.func.isRequired,
};

export default InvalidMailId;
