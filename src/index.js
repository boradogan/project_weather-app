
console.log('Selamun Aleykum Dunya')
import "./styles/main.css"
import { londonWeather } from "./mockData";
import { weatherApi } from "./api/weatherApi";
import { getWeatherData } from "./logic/appLogic";
import { ui } from "./ui-components/ui";

const getAndDisplayData = async () => {
    // const cityName = "london";
    // const API_KEY = "JJ6WZBUZTTL8NLURYSBYC9FTF";
    // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    // console.log(url);
    // console.log(londonWeather);
    
    console.log(getWeatherData('london', true))
    const cleanWeatherData = await getWeatherData('london', true);
    const weatherData = {

        //textContent
        resolvedAddress: cleanWeatherData.resolvedAddress.address,
        temperature: `${cleanWeatherData.current.temp}°C`,
        conditionText: cleanWeatherData.current.conditions,

        //src 
        weatherIcon: cleanWeatherData.current.icon
    }
    console.log(weatherData);
    ui.currentWeather.updateWithData(weatherData);

    

}



window.app = {
    getAndDisplayData
}