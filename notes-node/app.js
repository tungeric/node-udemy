console.log('Starting app.');

// open up https://nodejs.org/api and grab some modules
const fs = require('fs');
const os = require('os');

let user = os.userInfo();
console.log(user);

fs.appendFile('greetings.txt', `Trust the process, ${ user.username }`);

// //does the same thing
// fs.appendFild('greetings.txt', 'Trust the process', function(err) {
//   if(err) {
//     console.log('unable to write to file');
//   }
// };