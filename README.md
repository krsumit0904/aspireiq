## AspireIQ

### To run the project:

1. npm install
2. npm start

### To view the components individually

Run the command `npm run storybook` to see the individual components. Details about StoryBook can be found [here](https://storybook.js.org/).

### Test cases

Run the command `npm run test` to run and check the test cases. `Enzyme` has been used to shallow render the components and tes them.

### Feature completed

1. Receiver component contains autocomplete input field which displays filtered email list upon user input.
2. Autocomplete works upon "Tab" and "Enter" key or by clicking on the desired mail id.
3. The valid email ids are displayed with a button visible on  hover to remove the mail id. While we can also use backspace key to remove them.
4. The invalid email id are displayed with error indicators. These invalid ids can be removed via backspace key or by clicking on cross icon that appears on hover.
5. The rest of the UI is completely static but responsive and is not functional at the moment.

### Further approach

1. The textbox and the text editing feature can be developed using the [Draft js](https://draftjs.org/) library. Draft.js is a framework meant to be used with React to build a rich text editor.

### Changes made (not mentioned in task)

1. Ability to delete a invalid mail id by clicking on cross icon that appears on hover.
