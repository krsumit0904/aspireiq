import React from "react";
import styles from "./textbox.module.css";
import Title from "../Title";

const TextBox = () => (
  <div className={styles.rootWrapper}>
    <Title label="Enter your message..." />
  </div>
);

export default TextBox;
