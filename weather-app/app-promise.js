// command will look like node app.js --address '1301 lombard street'
// use axios!

const axios = require('axios');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
  .then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address');
    }
    console.log(response.data.results[0].formatted_address);
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/6f1b13a5428ff6a245d62fea7b4e830c/${lat},${lng}`;
    return axios.get(weatherUrl)
      .then((response) => {
        const temperature = response.data.currently.temperature;
        const feelsLike = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature} degrees. It feels like ${feelsLike}`)
      });
  })
  .catch((error) => {
    if(error.code == 'ENOTFOUND') {
      console.log('Unable to connect to API servers');
    } else {
      console.log(error.message);
    }
  });



// api key: 6f1b13a5428ff6a245d62fea7b4e830c
// example: https://api.darksky.net/forecast/6f1b13a5428ff6a245d62fea7b4e830c/37.8267,-122.4233