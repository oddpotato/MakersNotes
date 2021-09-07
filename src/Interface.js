document.addEventListener('DOMContentLoaded', () => {

  const viewNotes = () => {
    document.querySelector("#singleNoteContainer").innerHTML = convertNotestoHTML();
  };

  const convertNotestoHTML = () => {
    let str = '<ul>'
    notes.reverse().forEach(function(note) {
      str += '<li>'+ note.slice(0,19) + '</li>';
    });  
    str += '</ul>';
    return str;
  }

  const myNoteList = new NoteList();
  let notes = myNoteList.everyNote;
  viewNotes();

  const form  = document.querySelector('#addNewNote');

  form.addEventListener('submit', (event) => {
    const newNote = document.querySelector('#newNote').value;
    myNoteList.addNewNote(newNote);
    viewNotes();
    event.preventDefault();
  });

})

// user clicks on link/button to view individual note
// event listener loads up chosen note (should we use displayNote function or just array?)
// we call viewNote method to do the html part. Need to add in a div for view note