class NoteList {
  constructor() {
      this.everyNote = [];
  }

  addNewNote(content) {
      let newNote = new Note(content);
      this.everyNote.push(newNote);

      return newNote.emojify();
  }

  displayAllNotes() {
    console.log("Calling displayAllNotes()")
    let notes = [];
    if (this.everyNote.length === 0){
      return ["this is an empty array"]
    }
      this.everyNote.forEach((note) => {
          notes.push(note.content.slice(0,19));
      })

    return notes;
  }

  displayNote(index) {
      // console.log(this.everyNote[index]); 
      return this.everyNote[index];
  }
}

class Note {
  constructor(noteContent) {
    this.content = noteContent;
  }

  emojify() {
    let contentJSON = JSON.parse(`{"text":"${this.content}"}`);

    let promise = fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contentJSON),
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Success:', data);
      this.content = data.emojified_text;
    })

    return promise;
  }
}
