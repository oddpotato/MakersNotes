document.addEventListener('DOMContentLoaded', () => {

  const myNoteList = new NoteList();
  const notes = myNoteList.displayAllNotes();
  
  const viewNotes = () => {
    let str = '<ul>'
    notes.reverse().forEach(function(note) {
      str += '<li>'+ note + '</li>';
    });  
  str += '</ul>';
  document.querySelector("#noteContainer").innerHTML = str;
  };
  
  viewNotes();

})
