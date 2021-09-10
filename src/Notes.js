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

    console.log(this.everyNote);
    console.log(this.all());
    console.log(this.noteWithId(newNote.id));

    return newNote.emojify();
  }

  all() {
    return this.everyNote;
  }

  noteWithId(id) {
    this.everyNote.find((note) => note.id == id)
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

  displayNote(id) {
    return this.everyNote.find(note => note.id == id)
  }
}

class Note {
  constructor(noteContent) {
    this.id;
    this.content = noteContent.replaceAll("\n", "\\n");
  }

  emojify() {
//    let newContent = this.content.replace("\n", "\\n");
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
