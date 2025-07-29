import { currentWeatherComponent } from "./currentWeather";
import { searchBarComponent } from "./searchBar";
import { dayListComponent } from "./dayList";


export const ui = {
    currentWeather: new currentWeatherComponent(),
    searchBar: new searchBarComponent(),
    dayList : new dayListComponent()
}