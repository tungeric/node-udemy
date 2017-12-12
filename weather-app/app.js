// command will look like node app.js --address '1301 lombard street'

const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});