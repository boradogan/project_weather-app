
console.log('Selamun Aleykum Dunya')
import { londonWeather } from "./mockData";
import { weatherApi } from "./api/weatherApi";
import { getandDisplayWeather } from "./logic/appLogic";

import "./styles/main.css"

const apiTest = () => {
    // const cityName = "london";
    // const API_KEY = "JJ6WZBUZTTL8NLURYSBYC9FTF";
    // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    // console.log(url);
    // console.log(londonWeather);
    console.log(getandDisplayWeather('london', false))



}

apiTest();