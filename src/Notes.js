
class NoteList {
    constructor(){
        this.everyNote = ["note1", "note2"]
    }

    addNewNote(noteContent){
        let note = new Note(noteContent)
        this.everyNote.push(note.content)
        console.log(this.everyNote);
    }

    displayAllNotes(){
        return this.everyNote.map(note => note.slice(0,19));
    }

    displayNote(index){
        console.log(this.everyNote[index]);
    }
}

class Note {

    constructor(noteContent){
        this.content = noteContent
    }
}


// listOfNotes = new NoteList
// listOfNotes.addNewNote('Hello This is me testing a thing')
// 
// listOfNotes.addNewNote('Ignore it')
// listOfNotes.addNewNote('Hi Javascript Gods')
// console.log(listOfNotes.everyNote)
// 
// listOfNotes.displayAllNotes()