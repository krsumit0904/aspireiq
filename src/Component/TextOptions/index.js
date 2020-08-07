import React from "react";
import styles from "./textOptions.module.css";
import "font-awesome/css/font-awesome.min.css";

const TextOptions = () => (
  <div className={styles.rootWrapper}>
    <div className={styles.selectOptions}>
      <span className={styles.selectText}>
        Normal text
      </span>
      <i className={`fa fa-caret-down ${styles.icon}`} />
    </div>
    <div className={styles.verticalLine}>&nbsp;</div>
    <div className={styles.iconGroup}>
      <i className={`fa fa-bold ${styles.icon}`} />
      <i className={`fa fa-italic ${styles.icon}`} />
      <i className={`fa fa-ellipsis-h ${styles.icon}`} />
    </div>
    <div className={styles.verticalLine}>&nbsp;</div>
    <div className={styles.iconGroup}>
      <i className={`fa fa-font ${styles.icon}`} />
    </div>
    <div className={styles.verticalLine}>&nbsp;</div>
    <div className={styles.iconGroup}>
      <i className={`fa fa-list ${styles.icon}`} />
      <i className={`fa fa-list-ol ${styles.icon}`} />
    </div>
    <div className={styles.verticalLine}>&nbsp;</div>
    <div className={styles.iconGroup}>
      <i className={`fa fa-link ${styles.icon}`} />
      <i className={`fa fa-picture-o ${styles.icon}`} />
      <i className={`fa fa-quote-right ${styles.icon}`} />
    </div>
  </div>
);

export default TextOptions;
