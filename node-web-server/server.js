const express = require('express');

const app = express();

// route handlers
app.get('/', (req, res) => {
  // res.send('<h1>Trust the process, Express!</h1>');
  res.send({
    name: 'Sam Hinkie',
    likes: [
      'Processing',
      'Optionality',
      'Assets'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Sam');
});

app.get('/bad', (req, res) => {
  res.send({
    error: {
      status: "Not great"
    }
  });
});

// tell the app to listen
app.listen(3000);