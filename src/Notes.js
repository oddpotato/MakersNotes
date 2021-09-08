class NoteList {
  constructor() {
      this.everyNote = [];
  }

  addNewNote(content) {
      let newNote = new Note(content);
      this.everyNote.push(newNote);
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
      console.log(this.everyNote[index]); 
      return this.everyNote[index];
  }
}

class Note {
  constructor(noteContent) {
      this.content;

      let contentJSON = JSON.parse(`{"text":"${noteContent}"}`);

      async function emojify(content) {
        let response = await fetch('https://makers-emojify.herokuapp.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(content),
        });

        let data = await response.json();
        return data.emojified_text;
    }
    emojify(contentJSON).then((value) => this.content = value);   
  }
}
