Make a todo app.

All these next html tags, add them inside the <div> that's inside <div id="main-container">.

Add an input field for the note content.
A button "Save" to save the notes in an array.
A button "Sort By Text" to sort the notes by text, and a button "Sort By Time" to sort the notes by the timestamp when they were created.

When user saves a note, create an object `{text: *the text inside the input*, timestamp: *current timestamp, looks like this: 1671402915492*}`.

Save the object in an array, and save that array to localstorage.

When user loads the page, load notes from localstorage.

Display the notes in the html page, inside the div with id "notes".
Tip: Use createElement and createTextNode.

The Sort By Text button sorts the notes array by text. Use a.text.localeCompare(b.text);
The Sort By Time button sorts the notes array by the timestamp in each note. Use a.timestamp - b.timestamp.

Optional:
Make the sort order(ascending or descending) by text and time buttons invert the sorting order every time you press the button.
