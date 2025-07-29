import { londonWeather } from "../mockData";

const API_KEY = "JJ6WZBUZTTL8NLURYSBYC9FTF"; // I know it's leaked :)


export async function weatherApi(cityName){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    console.log(`Calling the API: for ${cityName}`);

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Http Error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    
        return data;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // throw new Error('weatherApi failed', error);
        throw error
    }
    
}


export async function weatherApiMock(cityName){
    if(!cityName == "london") {
        throw new Error('you are using mock bro, give me london') 
        
    }
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(londonWeather);
            
        }, 500);
    })
}
