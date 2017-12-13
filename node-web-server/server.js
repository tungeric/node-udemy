const express = require('express');
const hbs = require ('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//register middleware!
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log+'\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

// route handlers
app.get('/', (req, res) => {
  // res.send('<h1>Trust the process, Express!</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home',
    welcomeMessage: 'Trust the Process!',
    name: 'Sam Hinkie',
    likes: [
      'Processing',
      'Optionality',
      'Assets'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: {
      status: "Not great"
    }
  });
});

// tell the app to listen
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});