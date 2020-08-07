import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./autocomplete.module.css";

const Autocomplete = ({
  list, getValue, updateList, selectedList, placeholder,
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredmailIds, setFilteredMailIds] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [userInput, setUserInput] = useState("");

  // Event fired when the input value is changed
  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredmailIds = list.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setFilteredMailIds(filteredmailIds);
    setActiveSuggestion(0);
    setUserInput(e.currentTarget.value);
    setShowSuggestion(!!filteredmailIds.length);
  };

  // Event fired when the user clicks on a suggestion
  const onClick = (e) => {
    // Update the user input and reset the rest of the state
    setFilteredMailIds([]);
    setActiveSuggestion(0);
    setShowSuggestion(false);
    setUserInput("");
    getValue(e.currentTarget.innerText);
  };

  // Event fired when the user presses a key down
  const onKeyDown = (e) => {
    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13 || e.keyCode === 9) {
      e.preventDefault();
      if (!showSuggestion && userInput !== "") {
        getValue(e.target.value);
      } else {
        getValue(filteredmailIds[activeSuggestion]);
      }
      setActiveSuggestion(0);
      setShowSuggestion(false);
      setUserInput("");
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredmailIds.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }

    // User pressed the back space, conditionally remove last item
    else if (e.keyCode === 8) {
      if (userInput === "") {
        const cloneList = selectedList.slice(0);
        cloneList.pop();
        updateList(cloneList);
      }
    }
  };

  let suggestionsListComponent;

  if (showSuggestion && userInput) {
    if (filteredmailIds.length) {
      suggestionsListComponent = (
        <ul className={styles.suggestions}>
          {filteredmailIds.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = styles.suggestionActive;
            }

            return (
              <li
                className={className}
                key={suggestion}
                onClick={onClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputField}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder={placeholder}
      />
      {suggestionsListComponent}
    </div>
  );
};

Autocomplete.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  selectedList: PropTypes.arrayOf(PropTypes.string),
  updateList: PropTypes.func,
  getValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Autocomplete;
