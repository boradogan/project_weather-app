import { weatherApi } from "../api/weatherApi";

export const weatherDataCache = {
  cache: new Map(), // Use a Map to preserve order
  maxSize: 5,       // Set a maximum number of items to cache

  async get(cityName) {
    // --- Cache Hit ---
    if (this.cache.has(cityName)) {
      console.log(`Getting ${cityName} from cache.`);
      const cachedData = this.cache.get(cityName);
      
      // Move the accessed item to the end to mark it as most recently used
      this.cache.delete(cityName);
      this.cache.set(cityName, cachedData);
      
      return cachedData;
    }

    // --- Cache Miss ---
    console.log(`Fetching ${cityName} from API.`);
    const newData = await weatherApi(cityName);
    
    // If the cache is full, remove the least recently used item (the first one)
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
      console.log(`Cache full. Evicting ${oldestKey}.`);
    }

    this.cache.set(cityName, newData);
    return newData;
  }
};
