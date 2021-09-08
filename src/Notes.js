
2
class NoteList {
4
 
  constructor() {
5
 
      this.everyNote = ["note1 is a very long note that needs slicing", "note2"];
6
 
  }
7
 
​
8
 
  addNewNote(content) {
9
 
      let newNote = new Note(content);
10
 
      this.everyNote.push(newNote);
11
 
  }
12
 
​
13
 
  displayAllNotes() {
14
 
    let notes = [];
15
 
​
16
 
      this.everyNote.forEach((note) => {
17
 
          notes.push(note.content.slice(0,19));
18
 
      })
19
 
    
20
 
    return notes;
21
 
  }
22
 
​
23
 
  displayNote(index) {
      console.log(this.everyNote[index]);
24
 
      return this.everyNote[index];
25
 
  }
45
}
46
​
47
class Note {
48
  constructor(noteContent) {
49
      this.content;
50
​
51
      let contentJSON = JSON.parse(`{"text":"${noteContent}"}`);
52
​
53
      async function emojify(content) {
54
        let response = await fetch('https://makers-emojify.herokuapp.com/', {
55
          method: 'POST',
56
          headers: {
57
            'Content-Type': 'application/json',
58
          },
59
          body: JSON.stringify(content),
60
        });
61
​
62
        let data = await response.json();
63
        return data.emojified_text;
64
    }
65
​
66
    emojify(contentJSON).then((value) => this.content = value);   
67
  }
68
}
