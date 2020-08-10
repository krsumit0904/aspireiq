import React, { useState } from "react";
import mails from "../../data";
import validateEmail from "../../Helper/validateMail";
import Autocomplete from "../Autocomplete";
import ValidMailId from "../ValidMailId";
import InvalidMailId from "../InvalidMailId";
import Title from "../Title";
import styles from "./receiver.module.css";

const Receiver = () => {
  const [receivers, setReceiver] = useState([]);

  const removeMailId = (mailId) => {
    const receiverClone = receivers.slice();
    const index = receiverClone.indexOf(mailId);
    receiverClone.splice(index, 1);
    setReceiver(receiverClone);
  };

  const handleBackSpace = () => {
    const cloneList = receivers.slice(0);
    cloneList.pop();
    setReceiver(cloneList);
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
                index={index}
                removeMailId={removeMailId}
              />
            )
          ))
        }
        <Autocomplete
          list={[...new Set(mails)]}
          onSelect={(value) => setReceiver([...receivers, value])}
          removeItem={handleBackSpace}
          placeholder="Enter recipients..."
        />
      </div>
    </div>
  );
};

export default Receiver;
