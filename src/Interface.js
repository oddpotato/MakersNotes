document.addEventListener('DOMContentLoaded', () => {
  noteList = new NoteList();

  const viewNotes = () => {
    document.querySelector("#singleNoteContainer").innerHTML = convertNotestoHTML();
  };

  const convertNotestoHTML = () => {
    let str = '<ul>'
    array = myNoteList.displayAllNotes()
    
    array.reverse().forEach((note) => {
      str += '<li>'+ note + '</li>';
    });  
    str += '</ul>';
    return str;
  }

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