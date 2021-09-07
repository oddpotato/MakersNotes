document.addEventListener('DOMContentLoaded', () => {

  const myNoteList = new NoteList();
  const notes = myNoteList.displayAllNotes();
  
  const viewNotes = () => {
    let str = '<ul>'
    notes.reverse().forEach(function(note) {
      str += '<li>'+ note + '</li>';
    });  
  str += '</ul>';
  document.querySelector("#noteContainer").innerHTML = str;
  };
  
  viewNotes();

})

// document.querySelector('#addNewNote').addEventListener('click', () => {
// 
//   const addNewNote = myNoteList.addNewNote(NewNote);
//   console.log(addNewNote);
// 
// })
// 

//const form = document.getElementById('subscribe');

function isTrue() {
  if (form != null) {
    console.log('true');
  }
}

const form  = document.getElementById('addNewNote');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // handle the form data
});

form.submit();

console.log(form);
isTrue();