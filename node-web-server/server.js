const express = require('express');
const hbs = require ('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
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
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});