import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './receiver.module.css'
import emailList from '../../data.js'
import Autocomplete from '../Autocomplete';
import validateEmail from '../../Helper/validateMail'

const Receiver = ({ }) => {
  const [receivers, setReceiver] = useState([])
  const mails = emailList.split(',').map((mail) => mail.replace(/(\r\n|\n|\r)/gm, ""))

  const removeMailId = (index) => {
    const updatedReceivers = receivers.filter((item, id) => id !== index)
    setReceiver(updatedReceivers)
  }

  return (
    <div className={styles.toBox}>
      <span className={styles.title}>To:</span>
      <div className={styles.receivers}>
        {receivers.map((mailId, index) => validateEmail(mailId) ?
          <div className={styles.verifiedWrapper}>
            <span className={styles.verified}>
              {mailId}
            </span>
            <i className={`fa fa-times ${styles.cross}`} onClick={() => removeMailId(index)} />
          </div>
          :
          <div className={styles.unverifiedWrapper}>
            <span className={styles.unverified}>
              {mailId}
            </span>
            <i className={`fa fa-exclamation ${styles.exclamation}`} />
          </div>
        )}
        <Autocomplete
          list={mails}
          getValue={(value) => setReceiver([...receivers, value])}
        />
      </div>
    </div>
  );
}

Receiver.propTypes = {

};


export default Receiver
