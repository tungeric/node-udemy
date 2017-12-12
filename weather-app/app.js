// command will look like node app.js --address '1301 lombard street'

const request = require('request');
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

geocode.geocodeAddress(argv.address, (geoError, geoResults) => {
  if(geoError) {
    console.log(geoError);
  } else {
    console.log(JSON.stringify(geoResults, undefined, 2));
    weather.getWeather(geoResults.latitude, geoResults.longitude, (weatherError, weatherResults) => {
      if (weatherError) {
        console.log(weatherError);
      } else {
        console.log(`It's currently ${weatherResults.temperature} degrees`);
        console.log(`but it feels like ${weatherResults.feelsLike} degrees`);
      }
    });
  }
});



// api key: 6f1b13a5428ff6a245d62fea7b4e830c
// example: https://api.darksky.net/forecast/6f1b13a5428ff6a245d62fea7b4e830c/37.8267,-122.4233