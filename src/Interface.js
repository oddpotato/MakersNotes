document.addEventListener('DOMContentLoaded', () => {
  noteList = new NoteList();

  const viewNotes = () => {
    let noteContainer = document.querySelector("#singleNoteContainer")

    while (noteContainer.firstChild) {
      noteContainer.removeChild(noteContainer.firstChild);
    }

    let list = document.createElement("ul");

    myNoteList.displayAllNotes().reverse().forEach((note, index) => {
      let listItem = document.createElement("li");

      listItem.innerHTML = note;
      listItem.setAttribute("id", `note${index}`);
      listItem.addEventListener("click", () => {
        console.log(`Clicked note ${index}`);
      })
      
      list.appendChild(listItem);
    })

    noteContainer.appendChild(list);

    // document.querySelector("#singleNoteContainer").innerHTML = convertNotestoHTML();
  };

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