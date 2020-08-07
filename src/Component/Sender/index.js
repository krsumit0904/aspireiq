import React from "react";
import Title from "../Title";
import styles from "./sender.module.css";

const Sender = () => (
  <div className={styles.fromBox}>
    <Title label="From:" />
  </div>
);

export default Sender;
