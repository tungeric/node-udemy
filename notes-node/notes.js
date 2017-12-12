const fs = require('fs');

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    console.log("Something went wrong: ", e);
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  const notes = fetchNotes();
  return notes;
};

const getNote = (title) => {
  const notes = fetchNotes();
  let correctNote = notes.filter((note) => note.title === title)
  if(correctNote.length === 1) {
    return correctNote[0];
  }
};

const removeNote = (title) => {
  const notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  if(filteredNotes.length !== notes.length) {
    saveNotes(filteredNotes);
    return true;
  }
};

const logNote = (note) => {
  console.log("------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote: addNote, getAll, getNote, removeNote, logNote
};