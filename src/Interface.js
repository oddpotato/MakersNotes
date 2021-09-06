document.addEventListener('DOMContentLoaded', () => {

  // This will access Notes class
  const notesArray = ["message1" , "message2", "message3"]

  const viewNotes = () => {"This is the first test message"
    document.querySelector('#messageIntro').innerText = notesArray;
  };
  viewNotes();
})