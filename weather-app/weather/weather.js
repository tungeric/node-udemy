const request = require('request');

const getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/6f1b13a5428ff6a245d62fea7b4e830c/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to darksky server");
    } else if (response.statusCode === 400) {
      callback("Unable to fetch weather.");
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature,
      });
    }
  });
};

module.exports = { getWeather };