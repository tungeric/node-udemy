console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {
    console.log("Something went wrong: ", e);
  }

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('Getting all');
};

const getNote = (title) => {
  console.log(`Getting note with the title ${title}`);
};

const removeNote = (title) => {
  console.log(`Removing note with the title ${title}`);
};

module.exports = {
  addNote: addNote, getAll, getNote, removeNote
};