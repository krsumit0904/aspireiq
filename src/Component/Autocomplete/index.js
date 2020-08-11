import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./autocomplete.module.css";
import KEYS from "./keys";

const Autocomplete = ({
  list, onSelect, removeItem, placeholder,
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredmailIds, setFilteredMailIds] = useState([]);
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
  };

  // Event fired when the user clicks on a suggestion
  const onClick = (e) => {
    // Update the user input and reset the rest of the state
    setFilteredMailIds([]);
    setActiveSuggestion(0);
    setUserInput("");
    onSelect(e.currentTarget.innerText);
  };

  // Event fired when the user presses a key down
  const onKeyDown = (e) => {
    switch (e.keyCode) {
      // User pressed the enter key, update the input and close the
      // suggestions
      case KEYS.ENTER:
      case KEYS.TAB:
        e.preventDefault();
        if (!filteredmailIds.length && userInput !== "") {
          onSelect(e.target.value);
        } else {
          onSelect(filteredmailIds[activeSuggestion]);
        }
        setActiveSuggestion(0);
        setUserInput("");
        break;

      // User pressed the up arrow, decrement the index
      case KEYS.UP:
        if (activeSuggestion === 0) {
          return;
        }
        setActiveSuggestion(activeSuggestion - 1);
        break;

      // User pressed the down arrow, increment the index
      case KEYS.DOWN:
        if (activeSuggestion - 1 === filteredmailIds.length) {
          return;
        }
        setActiveSuggestion(activeSuggestion + 1);
        break;

      // User pressed the back space, conditionally remove last item
      case KEYS.BACKSPACE:
        if (userInput === "") {
          removeItem();
        }
        break;

      default:
        break;
    }
  };

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
      {userInput && !!filteredmailIds.length
      && (
        <ul className={styles.suggestions}>
          {filteredmailIds.map((suggestion, index) => (
            <li
              className={index === activeSuggestion ? styles.suggestionActive : ""}
              key={suggestion}
              onClick={onClick}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeItem: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Autocomplete;
