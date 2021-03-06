document.addEventListener('DOMContentLoaded', () => {
  noteList = new NoteList();

  const viewNotes = () => {
    let noteContainer = document.querySelector("#singleNoteContainer");

    while (noteContainer.firstChild) {
      noteContainer.removeChild(noteContainer.firstChild);
    }

    let list = document.createElement("ul");

    myNoteList.all().reverse().forEach((note) => {
      note.content.replaceAll("<br>", "");

      let listItemButton = document.createElement("button");
      //listItemButton.innerHTML = "";
      
      //if (note.content.length > 20) {
       // listItemButton = document.createElement("button");
       // listItemButton.setAttribute("class", "open-note-button");
      //  listItemButton.innerHTML = "Show More"
        
       // listItemButton.addEventListener("click", () => {
      //    if (listItem.classList.contains("closed")) { openNote(note) }
      //  })
      //}
      
      // create a new empty list item
      let listItem = document.createElement("li");
      let listItemText = document.createElement("span");
      // let listItemButton = document.createElement("button");
      let hr = document.createElement("hr");

      listItemButton.setAttribute("class", "open-note-button");
      listItemButton.innerHTML = "Expand"
      
      listItemText.innerHTML = slicedString(note.content);
      listItemText.setAttribute("class", "short-note-text");

      listItemButton.addEventListener("click", () => {
        if (listItem.classList.contains("closed")) { openNote(note) }
      })
      
      listItem.classList.add("closed");
      listItem.setAttribute("id", `note${note.id}`);

      listItem.appendChild(listItemText);
      listItem.appendChild(listItemButton);
      list.appendChild(listItem);
      list.appendChild(hr);
    })

    noteContainer.appendChild(list);
  };

  const slicedString = (str) => {
    let dots = "";
    
    if (str.length > 20) {
      dots = " ...  ";
    }
    
    let removeBreaks = str.replaceAll("<br>", " ");
    return removeBreaks.slice(0, 19) + dots;
  }

  const openNote = (note) => {
    let listItem = document.querySelector(`#note${note.id}`);

    listItem.classList.remove("closed");
    listItem.classList.add("open");
    
    let wholeNoteDiv = document.createElement("div");
    let closeButton = document.createElement("button");
    let textDiv = document.createElement("div");
    let buttonDiv = document.createElement("div");
    
    closeButton.innerHTML = "Show Less";
    closeButton.setAttribute("class", "close-note-button");
    closeButton.addEventListener("click", () => {
      closeNote(note);
    });

    wholeNoteDiv.setAttribute("class", "full-note");
    textDiv.innerHTML = note.content;

    buttonDiv.appendChild(closeButton);

    wholeNoteDiv.appendChild(textDiv);
    wholeNoteDiv.appendChild(buttonDiv);
    listItem.appendChild(wholeNoteDiv);
  };

  const closeNote = (note) => {
    let listItem = document.querySelector(`#note${note.id}`);

    while (listItem.firstChild) {
      listItem.removeChild(listItem.firstChild);
    }

    let listItemText = document.createElement("span");
      let listItemButton = document.createElement("button");
    listItemText.setAttribute("class", "short-note-text");
    listItemButton.setAttribute("class", "open-note-button");
    listItemButton.innerHTML = "Expand";
    
    listItemButton.addEventListener("click", () => {
      if (listItem.classList.contains("closed")) { openNote(note) }
    })
    
    listItemText.innerHTML = slicedString(note.content);
    listItemText.addEventListener("click", () => {
      if (listItem.classList.contains("closed")) { openNote(note) }
    })

    listItem.classList.remove("open");
    listItem.classList.add("closed");

    listItem.appendChild(listItemText);
    listItem.appendChild(listItemButton);
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

