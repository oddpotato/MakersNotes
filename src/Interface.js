document.addEventListener('DOMContentLoaded', () => {

  const notes = ["message1", "message2", "message3", "message4", "message5"]
  // This will access Notes class
  const viewNotes = () => {
    let str = '<ul>'
    notes.reverse().forEach(function(note) {
      str += '<li>'+ note+ '</li>';
    }); 
  str += '</ul>';
  document.querySelector("#noteContainer").innerHTML = str;
  };
  viewNotes();
})
