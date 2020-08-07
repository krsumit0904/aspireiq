import React from "react";
import styles from "./mailbox.module.css";
import Sender from "../Sender";
import Receiver from "../Receiver";
import Subject from "../Subject";
import TextOptions from "../TextOptions";
import TextBox from "../TextBox";
import Footer from "../Footer";

const MailBox = () => (
  <div className={styles.rootWrapper}>
    <Sender />
    <Receiver />
    <Subject />
    <TextOptions />
    <TextBox />
    <Footer />
  </div>
);

export default MailBox;
