document.addEventListener('DOMContentLoaded', () => {
  noteList = new NoteList();

  const viewNotes = () => {
    // store a reference to the note container for convenience!
    let noteContainer = document.querySelector("#singleNoteContainer");

    // clear the note container by removing all the child elements
    // (lifted this directly from the mozill docs lol)
    while (noteContainer.firstChild) {
      noteContainer.removeChild(noteContainer.firstChild);
    }

    // create an empty unordered list element
    let list = document.createElement("ul");

    // loop through all the notes (as in OBJECTS not strings) in reverse
    myNoteList.all().reverse().forEach((note) => {

      // create a new empty list item
      let listItem = document.createElement("li");

      // create an empty span element just to hold the list item text
      let listItemText = document.createElement("span");
      
      // set the list item text to the sliced note content
      listItemText.innerHTML = note.content.slice(0, 19);

      // set the list item class to "note" + the note id, i.e, "note1", "note2", etc
      listItem.setAttribute("id", `note${note.id}`);

      // add an event listener to ONLY the list item text, so it calls openNote() when clicked
      listItemText.addEventListener("click", () => {
        openNote(note);
      })

      // finally, add the text to the list item...
      listItem.appendChild(listItemText);

      // and add the list item to the unordered list
      list.appendChild(listItem);
    })

    // add the unordered list to the note container
    noteContainer.appendChild(list);
  };

  // this function takes a note OBJECT!
  const openNote = (note) => {
    // find the note with the id "note" + this particular note.id
    let listItem = document.querySelector(`#note${note.id}`);

    // create a div to hold the full text of the note
    let wholeNoteDiv = document.createElement("div");

    // create a close button for closing that div
    // and give it some text and a sensible class name
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.setAttribute("class", "close-note-button");

    // add an event listener to the close button to call closeNote() on click
    closeButton.addEventListener("click", () => {

      // call closeNote() passing in the html id of the note list item
      closeNote(`note${note.id}`);
    });

    // give the whole note div a sensible class name
    wholeNoteDiv.setAttribute("class", "full-note");

    // add the full text of the note to the whole note div
    wholeNoteDiv.innerHTML = note.content;

    // add the close button to the whole note div
    wholeNoteDiv.appendChild(closeButton);

    // add the whole note div as a child of the note list item and watch it magically appear!
    listItem.appendChild(wholeNoteDiv);
  };

  // this function takes a string which is the html id of a particular list item
  const closeNote = (noteId) => {
    // find the note with the id "note" + this particular note.id
    let listItem = document.querySelector(`#${noteId}`);

    // remove the full text div from the list item
    listItem.removeChild(listItem.firstChild);

    // call viewNotes again to regenerate the note list
    viewNotes();
  }

  // const convertNotestoHTML = () => {
  //   let str = '<ul>'
  //   array = myNoteList.displayAllNotes()
    
  //   array.reverse().forEach((note) => {
  //     // note_div = document.createElement("li")
  //     str += '<li>'+ note + '</li>';
  //   });  
  //   str += '</ul>';
  //   return str;
  // }

  const myNoteList = new NoteList();
  let notes = myNoteList.displayAllNotes();
  viewNotes();

  form = document.querySelector('#addNewNote');

  form.addEventListener('submit', (event) => {
    let newNote = document.querySelector('#newNote').value;

    myNoteList.addNewNote(newNote).then(() => {
      viewNotes();
    });
    event.preventDefault();
  });
})

// user clicks on link/button to view individual note
// event listener loads up chosen note (should we use displayNote function or just array?)
// we call viewNote method to do the html part. Need to add in a div for view note