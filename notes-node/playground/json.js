// let obj = {
//   name: "Ben Simmons"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{ "name": "Joel Embiid", "age": 23 }';
// let person = JSON.parse(personString);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};
//originalNoteString
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);