
// Run the following tests on page load
document.addEventListener("DOMContentLoaded", () => {
  // Tests for Note & NoteList classes. Yes they're in the same
  // place, no we haven't used mocks, sorry

  console.log("Notes Tests")

  // NoteList can add notes
  let notes1 = new NoteList
  notes1.addNewNote("Hello, world!")

  if (notes1.everyNote[0] == "Hello, world!") {
    console.log("A NoteList can add a note")
  } else {
    console.log("Fail!!")
  }

  // NoteList shows all notes
  let notes2 = new NoteList

  let text1 = "Hello, world!"
  let text2 = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"

  notes2.addNewNote(text1)
  notes2.addNewNote(text2)

  let array = [text1, text2]
  let itWorks = true;

  array.forEach((item, index) => {
    if (notes2.everyNote[index] != item) {
      itWorks = false;
    }
  })

  if (itWorks) {
    console.log("Notes shows all notes")
  } else {
    console.log("FAIL!!")
  }
})