noteTester = new Tester("Tests with a variety of statuses");

note = new Note("Hello")

noteTester.check("equalityOf", [note.content, "Hello"], "A note is initialised with content");
