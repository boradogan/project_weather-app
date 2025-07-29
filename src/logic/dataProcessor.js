
export const processWeather = (weatherData) => {
    let cleanData = {
        searchedAddress: weatherData.address,
        resolvedAddress: {
            address: weatherData.resolvedAddress,
            latitude: weatherData.latitude,
            longitude: weatherData.longitude
        },
        current: {
            temp: weatherData.currentConditions.temp,
            cloudcover: weatherData.currentConditions.cloudcover,
            conditions: weatherData.currentConditions.conditions,
            icon: weatherData.currentConditions.icon,
            windspeed: weatherData.currentConditions.windspeed,
            winddir: weatherData.currentConditions.winddir
        }
    }
    cleanData["days"] = weatherData.days;


    return cleanData;


}




// Inside dataProcessor.js

export function formatHourlyData(dayObject) {
  // `dayObject` is one of the items from the `days` array in your API response
  
  const labels = dayObject.hours.map(hour => {
    // Extracts the hour, e.g., "13:00"
    return hour.datetime.slice(0, 5); 
  });

  const data = dayObject.hours.map(hour => hour.temp);

  return { labels, data };
}