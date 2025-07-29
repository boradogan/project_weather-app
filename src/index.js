
console.log('Selamun Aleykum Dunya')
import "./styles/main.css"
import { appLogic, fetchWeatherData } from "./logic/appLogic";
import { ui } from "./ui-components/ui";
import { formatHourlyData } from "./logic/dataProcessor";

const logic = new appLogic();

const apiTest = () => {
    console.log(logic.getWeatherData('london', false));
}




const main = (() => {
    
    console.log('test')
    document.addEventListener('search-submit', async (event) => {
        const cityName = event.detail["search-bar-text"];
        try {
            const cleanWeatherData = await logic.fetchWeatherData(cityName, true);
            console.log('Printing clean weather data')
            console.log(cleanWeatherData);
            const currentWeatherData = logic.parseCurrentWeatherData(cleanWeatherData);
            ui.currentWeather.updateWithData(currentWeatherData);

            ui.dayList.updateWithData(cleanWeatherData.days.slice(0, 8));

            // ui.hourlyView.update(formatHourlyData(cleanWeatherData.days[0]))
        } catch (error) {
            // alert(`${cityName} not found!`);
            console.error(error)
            
        }

    })



    document.addEventListener('daySelected', (event) => {
        const {datetime} = event.detail;
        // console.log(datetime);
        const weatherData = logic.weatherData;
        // console.log(weatherData);
        const dayData = logic.getDayDataFromDate(weatherData, datetime)
        // console.log(dayData);
        ui.hourlyView.update(formatHourlyData(dayData));
    })

})()



// async function getAndDisplayData(cityName = "london") {
//     // const cityName = "london";
//     // const API_KEY = "JJ6WZBUZTTL8NLURYSBYC9FTF";
//     // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`;
//     // console.log(url);
//     // console.log(londonWeather);
//     try {
//         const cleanWeatherData = await logic.getWeatherData(cityName, true);
//         console.log(cleanWeatherData)
//         const currentWeatherData = {
    
//             //textContent
//             resolvedAddress: cleanWeatherData.resolvedAddress.address,
//             temperature: `${cleanWeatherData.current.temp}°C`,
//             conditionText: cleanWeatherData.current.conditions,
    
//             //src 
//             icon: cleanWeatherData.current.icon
//         }
//         console.log(currentWeatherData);
//         ui.currentWeather.updateWithData(currentWeatherData);
        
//     } catch (error) {
//         alert(`${cityName} not found!`)
        
//     }
    

    

// }


window.app = {
    apiTest
}