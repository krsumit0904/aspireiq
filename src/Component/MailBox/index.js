import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './mailbox.module.css'
import Sender from '../Sender'
import Receiver from '../Receiver'
import Subject from '../Subject'
import TextOptions from '../TextOptions'
import TextBox from '../TextBox'
import Footer from '../Footer'

const MailBox = ({ }) => {
  return (
    <div className={styles.rootWrapper}>
      <Sender />
      <Receiver />
      <Subject />
      <TextOptions />
      <TextBox />
      <Footer />
    </div>
  );
}

MailBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default MailBox
