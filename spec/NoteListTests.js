noteListTester = new Tester("NoteList");

notes = new NoteList;

noteListTester.check("arrayIsLength", [0, notes.all()], "starts with an empty array");

notes
.addNewNote("Hello, World!")
.then(() => { notes.addNewNote("Goodbye, World!") })
.then(() => { notes.addNewNote("Hello, Mars!") })
.then(() => { notes.addNewNote("Hello, Venus! 🔥") })
.then(() => {
  firstNote = notes.all()[0];
  noteListTester.check("equalityOf", [firstNote.content, "Hello, World!"], "allows you to create and add a new note");
  noteListTester.check("arrayIsLength", [4, notes.all()], "allows you to create and add several new notes");
  noteListTester.check("equalityOf", [firstNote.id, 0], "gives a new note an id");
  noteListTester.check("equalityOf", ["Hello, Venus! 🔥", notes.all()[3].content], "appropriately emojifies note content");
})
