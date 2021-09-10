document.addEventListener('DOMContentLoaded', () => {
  noteList = new NoteList();

  const viewNotes = () => {
    let noteContainer = document.querySelector("#singleNoteContainer");

    while (noteContainer.firstChild) {
      noteContainer.removeChild(noteContainer.firstChild);
    }

    let list = document.createElement("ul");

    myNoteList.all().reverse().forEach((note) => {
      let listItem = document.createElement("li");
      let listItemText = document.createElement("span");
      
      listItemText.innerHTML = slicedString(note.content);
      listItemText.addEventListener("click", () => {
        if (listItem.classList.contains("closed")) { openNote(note) }
      })
      
      listItem.classList.add("closed");
      listItem.setAttribute("id", `note${note.id}`);

      listItem.appendChild(listItemText);
      list.appendChild(listItem);
    })

    noteContainer.appendChild(list);
  };

  const slicedString = (str) => {
    return str.slice(0, 19);
  }

  const openNote = (note) => {
    let listItem = document.querySelector(`#note${note.id}`);

    listItem.classList.remove("closed");
    listItem.classList.add("open");
    
    let wholeNoteDiv = document.createElement("div");

    let closeButton = document.createElement("button");

    closeButton.innerHTML = "X";
    closeButton.setAttribute("class", "close-note-button");
    closeButton.addEventListener("click", () => {
      closeNote(note);
    });

    wholeNoteDiv.setAttribute("class", "full-note");
    wholeNoteDiv.innerHTML = note.content;

    wholeNoteDiv.appendChild(closeButton);
    listItem.appendChild(wholeNoteDiv);
  };

  const closeNote = (note) => {
    let listItem = document.querySelector(`#note${note.id}`);

    while (listItem.firstChild) {
      listItem.removeChild(listItem.firstChild);
    }
    
    let listItemText = document.createElement("span");
    
    listItemText.innerHTML = slicedString(note.content);
    listItemText.addEventListener("click", () => {
      if (listItem.classList.contains("closed")) { openNote(note) }
    })

    listItem.classList.remove("open");
    listItem.classList.add("closed");

    listItem.appendChild(listItemText);
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

