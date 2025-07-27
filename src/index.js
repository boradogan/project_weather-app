
console.log('Selamun Aleykum Dunya')
import "./styles/main.css"
import { appLogic, getWeatherData } from "./logic/appLogic";
import { ui } from "./ui-components/ui";

const logic = new appLogic();

const apiTest = () => {
    console.log(logic.getWeatherData('london', false));
}




const main = (() => {
    
    console.log('test')
    document.addEventListener('search-submit', async (event) => {
        const cityName = event.detail["search-bar-text"];
        try {
            const cleanWeatherData = await logic.getWeatherData(cityName, true);
            const currentWeatherData = logic.parseCurrentWeatherData(cleanWeatherData);
            ui.currentWeather.updateWithData(currentWeatherData);


        } catch (error) {
            alert(`${cityName} not found!`);
            
        }

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
    getAndDisplayData,
    apiTest
}