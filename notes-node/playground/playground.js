const somePromise = new Promise((resolve, reject) => {
  resolve('Hey it worked');
});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
});