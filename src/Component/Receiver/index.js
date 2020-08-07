import React, { useState } from "react";
import emailList from "../../data.js";
import validateEmail from "../../Helper/validateMail";
import Autocomplete from "../Autocomplete";
import ValidMailId from "../ValidMailId";
import InvalidMailId from "../InvalidMailId";
import Title from "../Title";
import styles from "./receiver.module.css";

const Receiver = () => {
  const [receivers, setReceiver] = useState([]);
  const mails = emailList.split(",").map((mail) => mail.replace(/(\r\n|\n|\r)/gm, ""));

  const removeMailId = (index) => {
    const updatedReceivers = receivers.filter((item, id) => id !== index);
    setReceiver(updatedReceivers);
  };

  return (
    <div className={styles.toBox}>
      <Title label="To:" />
      <div className={styles.receivers}>
        {
          receivers.map((mailId, index) => (validateEmail(mailId)
            ? (
              <ValidMailId
                key={`${mailId}_${index}`}
                mailId={mailId}
                index={index}
                removeMailId={removeMailId}
              />
            )
            : (
              <InvalidMailId
                key={`${mailId}_${index}`}
                mailId={mailId}
              />
            )
          ))
        }
        <Autocomplete
          list={mails}
          getValue={(value) => setReceiver([...receivers, value])}
          updateList={setReceiver}
          selectedList={receivers}
          placeholder="Enter recipients..."
        />
      </div>
    </div>
  );
};

export default Receiver;
