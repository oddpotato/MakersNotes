document.addEventListener('DOMContentLoaded', () => {

  const myNoteList = new NoteList();
  let notes = myNoteList.everyNote;
  
  const viewNotes = () => {
    let str = '<ul>'
    console.log(notes);
    notes.reverse().forEach(function(note) {
      str += '<li>'+ note + '</li>';
    });  
  str += '</ul>';
  document.querySelector("#noteContainer").innerHTML = str;
  };
  
  viewNotes();


const form  = document.querySelector('#addNewNote');

form.addEventListener('submit', (event) => {
  const newNote = document.querySelector('#newNote').value;
  // change to new note
  myNoteList.addNewNote("hello");

  viewNotes();

  event.preventDefault();
    // handle the form data
});

})


// form.submit();