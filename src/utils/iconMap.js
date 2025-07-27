// You would add all the possible icon names from the API here
// import clearDayIcon from '../assets/icons/clear-day.svg';

// export const iconMap = new Map([
//   ['partly-cloudy-day', 'https://www.svgrepo.com/show/310222/weather-partly-cloudy-day.svg'],
//   ['cloudy', 'https://www.svgrepo.com/show/326989/cloudy-sharp.svg'],
//   ['clear-day', clearDayIcon],
//   ['default', 'https://placehold.co/100x100']
//   // ... etc.
// ]);

// src/utils/iconMap.js

function importAll(r) {
  const imageMap = new Map(); // Create a Map instead of an object
  r.keys().forEach((key) => {

    const imageName = key.replace('./', '').replace('.svg', '');
    imageMap.set(imageName, r(key)); // Use .set() for Maps
  });
  return imageMap;
}

const icons = require.context('../assets/icons', false, /\.svg$/);


export const iconMap = importAll(icons);