
console.log('Selamun Aleykum Dunya')
import { londonWeather } from "./mockData";

const apiTest = () => {
    const cityName = "london";
    const API_KEY = "JJ6WZBUZTTL8NLURYSBYC9FTF";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    console.log(url);
    console.log(londonWeather);




}

apiTest();