console.log('Starting app.js');

// open up https://nodejs.org/api and grab some modules
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString("Ben Simmons"));
const filteredArray = _.uniq(['Embiid', 1, "Embiid", 1,2,3,4]);
console.log(filteredArray);

// let res = notes.addNote();
// console.log(res);

// let sum = notes.add(2,3);
// console.log(sum);

// let user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', `Trust the process, ${ user.username }! You are ${ notes.age }`);

// //does the same thing
// fs.appendFild('greetings.txt', 'Trust the process', function(err) {
//   if(err) {
//     console.log('unable to write to file');
//   }
// };