document.addEventListener('DOMContentLoaded', () => {
  noteList = new NoteList();

  const viewNotes = () => {
    document.querySelector("#singleNoteContainer").innerHTML = convertNotestoHTML();
  };

  const convertNotestoHTML = () => {
    let str = '<ul>'
    array = myNoteList.displayAllNotes()
    // console.log(array);
    
    array.reverse().forEach((note) => {
    //myNoteList.displayAllNotes().reverse().forEach((note) => {
      str += '<li>'+ note + '</li>';
    });  
    str += '</ul>';
    return str;
  }

  const myNoteList = new NoteList();
  let notes = myNoteList.displayAllNotes();
  viewNotes();

  // function viewAllNotes() {
    // console.log("calling View All Notes");

  form = document.querySelector('#addNewNote');

  form.addEventListener('submit', (event) => {
    let newNote = document.querySelector('#newNote').value;
    myNoteList.addNewNote(newNote).then(() => {
      viewNotes();
    });
    // console.log(myNoteList.everyNote)
    event.preventDefault();
  });

    // console.log(notes);

    // notes.forEach((note) => {
    //   newDiv = document.createElement("div");
    //   newDiv.innerHTML = note
    //   allNotesContainer.append(newDiv);
    // })
  // }
})


// user clicks on link/button to view individual note
// event listener loads up chosen note (should we use displayNote function or just array?)
// we call viewNote method to do the html part. Need to add in a div for view note