const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null    
  }
});

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// const newTodo = new Todo({
//   text: "Raise the cat"
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo: ', doc);
// }, (err) => {
//   console.log('Unable to save todo', err);
// });

const newUser = new User({
  email: 'thebest@email.ever'
});

newUser.save().then((doc) => {
  console.log('Saved user: ', doc);
}, (err)=> {
  console.log('Unable to save todo', err);
});