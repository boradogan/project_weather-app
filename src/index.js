
console.log('Selamun Aleykum Dunya')
import "./styles/main.css"
import { londonWeather } from "./mockData";
import { weatherApi } from "./api/weatherApi";
import { getWeatherData } from "./logic/appLogic";
import { ui } from "./ui-components/ui";


const apiTest = () => {
    console.log(getWeatherData('london', true));
}


window.app = {
    getAndDisplayData,
    apiTest
}

const main = (() => {
    console.log('test')
    document.addEventListener('search-submit', (event) => {
        const searchText = event.detail["search-bar-text"];
        getAndDisplayData(searchText);

    })

})()



async function getAndDisplayData(cityName = "london") {
    // const cityName = "london";
    // const API_KEY = "JJ6WZBUZTTL8NLURYSBYC9FTF";
    // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    // console.log(url);
    // console.log(londonWeather);
    try {
        const cleanWeatherData = await getWeatherData(cityName, true);
        console.log(cleanWeatherData)
        const weatherData = {
    
            //textContent
            resolvedAddress: cleanWeatherData.resolvedAddress.address,
            temperature: `${cleanWeatherData.current.temp}°C`,
            conditionText: cleanWeatherData.current.conditions,
    
            //src 
            icon: cleanWeatherData.current.icon
        }
        console.log(weatherData);
        ui.currentWeather.updateWithData(weatherData);
        
    } catch (error) {
        console.error('could get or display the data', error);
        
    }
    

    

}