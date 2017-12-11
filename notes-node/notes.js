console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
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