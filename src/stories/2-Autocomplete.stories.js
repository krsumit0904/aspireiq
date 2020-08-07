import React from 'react'
import Autocomplete from '../Component/Autocomplete'
import emailList from "../data";

export default { title: 'Autocomplete' }

const mails = emailList.split(",").map((mail) => mail.replace(/(\r\n|\n|\r)/gm, ""));

export const withDefault = () => (
  <Autocomplete
    list={mails}
    placeholder="Enter recipients..."
  />
)

withDefault.story = {
  decorators: [
    (story) => (
      <div style={{ border: '1px solid #ccc' }}>
        {story()}
      </div>
    ),
  ],
}