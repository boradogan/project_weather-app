import { weatherApi, weatherApiMock } from "../api/weatherApi";
import { londonWeather } from "../mockData";
import { processWeather } from "./dataProcessor";



export async function getWeatherData(cityName, isProcessed = true) {
    const rawData = await weatherApi(cityName);
    let cleanData
    if(isProcessed){
        cleanData = processWeather(rawData);
    } else {
        cleanData = rawData;
    }
    
    return cleanData;
}

