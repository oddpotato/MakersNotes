noteTester = new Tester("Note");

note = new Note("Hello");

noteTester.check("equalityOf", [note.content, "Hello"], "is initialised with some content");
noteTester.check("equalityOf", [note.id, null], "is initialised with a null id");
