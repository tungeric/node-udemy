const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000; // USE THIS TO PUSH TO HEROKU
// ALSO UPDATE PACKAGE.JSON SCRIPTS --> "start": "node server/server.js",
// ALSO UPDATE PACKAGE.JSON --> "engines": {
                                          // "node": "6.10.1"
                                      //   }

app.use(bodyParser.json());

// create REST api
//POST TODO
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

//GET TODOS
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (err) => {
    res.status(400).send(err);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  // Valid id using isValid
    // 404 - send back empty send
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // findById
    // success
    // error
      // 400 - bad request with empty body
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({ todo });
  }, (err) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});