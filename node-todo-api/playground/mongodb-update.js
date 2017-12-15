// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectId("5a3337b8eb02857a73cfaf3c")},
  //   { $set: { completed: true, name: 'Take out the trash'}},
  //   { returnOriginal: false }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate(
    { name: 'Ben Simmons' },
    { $inc: { age: 1 } },
    { returnOriginal: false }).then((result) => {
      console.log(result);
    });

  // db.close();
});