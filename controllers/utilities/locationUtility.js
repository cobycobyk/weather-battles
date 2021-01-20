const cities = require('./cities.json');

module.exports = {
  getCities,
}

function getCities() {
  let firstIndex = Math.floor(Math.random() * cities.length);
  let secondIndex = firstIndex;
  while(firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * cities.length);
  }
  return [cities[firstIndex], cities[secondIndex]];
}