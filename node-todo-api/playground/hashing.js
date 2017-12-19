const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
  id: 10
};

// const message = "Trust the process";
// const hash = SHA256(message).toString();

// console.log("Message: ", message);
// console.log("Hash: ", hash);

// const data = {
//   id: 4,
// };

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };

// const resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();

// if(resultHash === token.hash) {
//   console.log('data was not changed');
// } else {
//   console.log('data was changed. do not trust!');
// }