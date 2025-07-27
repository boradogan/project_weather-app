import { weatherApi, weatherApiMock } from "../api/weatherApi";
import { weatherDataCache } from "../cache/lruCache";
import { londonWeather } from "../mockData";
import { processWeather } from "./dataProcessor";



export async function getWeatherData(cityName, isProcessed = true) {
    // const rawData = await weatherApi(cityName);
    try {
        const rawData = await weatherDataCache.get(cityName);
        let cleanData
        if(isProcessed){
            cleanData = processWeather(rawData);
        } else {
            cleanData = rawData;
        }
        
        return cleanData;
        
    } catch (error) {
        console.error('error getting weather data', error)
        throw error;

        
    }
}

