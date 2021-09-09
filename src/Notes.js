class NoteList {
  constructor() {
      this.lastNoteId = 0;
      this.everyNote = [];
  }

  addNewNote(content) {
      let newNote = new Note(content);
      newNote.id = this.lastNoteId;

      this.everyNote.push(newNote);
      this.lastNoteId ++;

      console.log(newNote);
      return newNote.emojify();
  }

  all() {
    return this.everyNote;
  }

  displayAllNotes() {
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
      return this.everyNote[index];
  }
}

class Note {
  constructor(noteContent) {
    this.id;
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
      this.content = data.emojified_text;
    })

    return promise;
  }
}
