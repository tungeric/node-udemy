console.log('Starting app.js');

// open up https://nodejs.org/api and grab some modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
const command = argv._[0];
console.log('Yargs:', argv);
console.log('Command:', command);

if(command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(allNotes);
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if(note) {
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}