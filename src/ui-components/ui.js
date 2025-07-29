import { currentWeatherComponent } from "./currentWeather";
import { searchBarComponent } from "./searchBar";
import { dayListComponent } from "./dayList";
import { hourlyViewComponent } from "./hourlyView";


export const ui = {
    currentWeather: new currentWeatherComponent(),
    searchBar: new searchBarComponent(),
    dayList : new dayListComponent(),
    hourlyView: new hourlyViewComponent()
}