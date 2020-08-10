import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./invalidMailId.module.css";

const InvalidMailId = ({ mailId, removeMailId }) => {
  const crossIconClass = `fa fa-times ${styles.cross}`;
  const exclaimIconClass = `fa fa-exclamation ${styles.exclamation}`;
  const [showCrossIcon, setShowCrossIcon] = useState(false);

  return (
    <div className={styles.unverifiedWrapper}>
      <span className={styles.unverified}>
        {mailId}
      </span>
      <i
        className={showCrossIcon ? crossIconClass : exclaimIconClass}
        onMouseOver={() => setShowCrossIcon(true)}
        onMouseOut={() => setShowCrossIcon(false)}
        onClick={showCrossIcon
          ? () => removeMailId(mailId)
          : () => void (0)}
      />
    </div>
  );
};

InvalidMailId.propTypes = {
  mailId: PropTypes.string.isRequired,
  removeMailId: PropTypes.func.isRequired,
};

export default InvalidMailId;
