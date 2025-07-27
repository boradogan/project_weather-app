
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
            cloudCover: weatherData.currentConditions.cloudcover,
            conditions: weatherData.currentConditions.conditions,
            icon: weatherData.currentConditions.icon,
            sunrise: weatherData.currentConditions.sunrise,
            sunset: weatherData.currentConditions.sunset,
            windspeed: weatherData.currentConditions.windspeed,
            winddir: weatherData.currentConditions.winddir
        }
    }


    return cleanData;


}