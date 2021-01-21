const axios = require('axios');
const locationUtility = require('./utilities/locationUtility');

module.exports = {
  index,
  
}

async function index(req, res) {
  const cities = locationUtility.getCities();
  try {
    let first = (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].latitude}&lon=${cities[0].longitude}&appid=${process.env.WEATHER_KEY}`)).data;
    let second = (await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cities[1].latitude}&lon=${cities[1].longitude}&appid=${process.env.WEATHER_KEY}`)).data;
    res.json({cities, first, second});
  } catch (err) {
    console.log(err)
  }
}