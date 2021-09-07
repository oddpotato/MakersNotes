
class NoteList {
    constructor(){
        this.everyNote = ["this is my note balha blahabifeffe", "this another notes that we have taken"]
    }

    addNewNote(noteContent){
        let note = new Note(noteContent)
        this.everyNote.push(note.content)
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