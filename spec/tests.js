let notes = new NoteList

// Run the following tests on page load
document.addEventListener("DOMContentLoaded", () => {
  notes.addNewNote("Hello, world!")

  if (notes.everyNote[0] == "Hello, world!") {
    console.log("A NoteList can add a note")
  } else {
    console.log("Fail!!")
  }
})