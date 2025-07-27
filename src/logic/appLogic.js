
import { weatherDataCache } from "../cache/lruCache";

import { processWeather } from "./dataProcessor";

export class appLogic {
    #cleanData = null
    constructor(){

    }
    async getWeatherData(cityName, isProcessed = true) {
        // const rawData = await weatherApi(cityName);
        try {
            const rawData = await weatherDataCache.get(cityName);
            if(isProcessed){
                this.#cleanData = processWeather(rawData);
            } else {
                this.#cleanData = rawData;
            }
            
            return this.#cleanData;
            
        } catch (error) {
            console.error('error getting weather data', error)
            throw error;

            
        }
    
    }
    parseCurrentWeatherData(cleanData) {
        if(!cleanData) {
            throw new Error("Weather data not read yet");
            

        }
        // Returns the needed data for 
        return {
    
            //textContent
            resolvedAddress: cleanData.resolvedAddress.address,
            temperature: `${cleanData.current.temp}°C`,
            conditionText: cleanData.current.conditions,
    
            //src 
            icon: cleanData.current.icon
        }

    }

}

