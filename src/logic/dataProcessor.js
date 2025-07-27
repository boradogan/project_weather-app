
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