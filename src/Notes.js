// const Notes = {
//     
//     allNotes = Array.new,
// 
//     create = function(noteContent) {
//         allNotes.push(noteContent);
//     }
// 
// }
// 
// Notes.create('Hello I am a string that I am thinking is going to be a note')

class NoteList {

    constructor(){
        this.everyNote = []
        console.log(this.everyNote)
    }

    addNewNote(noteContent){
        console.log('Want to add a new note?')
        let note = new Note(noteContent)
        this.everyNote.push([note.content])
    }
}

class Note {

    constructor(noteContent){
        this.content = noteContent
        console.log(noteContent)
    }
}


listOfNotes = new NoteList
listOfNotes.addNewNote('Hello This is me testing a thing')
console.log(listOfNotes.everyNote)

listOfNotes.addNewNote('Ignore it')
listOfNotes.addNewNote('Hi Javascript Gods')
console.log(listOfNotes.everyNote)

console.log(listOfNotes.everyNote[0])