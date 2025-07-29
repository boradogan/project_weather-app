import { iconMap } from "../utils/iconMap";
import { formatDay } from "../utils/formatDay";
import { format } from "date-fns";

export class dayListComponent {
    #parent = document.getElementById('day-list-component');
    #element
    constructor() {
        this.#renderComponent();

    }

    #renderComponent() {
        const template = document.getElementById('day-list-template');
        const clone = template.content.cloneNode(true);
        this.#element = clone.querySelector('.day-list-container');
        this.#parent.appendChild(this.#element)

    }

    updateWithData(dayListData){
        //dayListData is expected to be a list of datData which will be used
        // to create child components
        this.#element.innerHTML = "";



        // For now dayListData will be a dummy array
        dayListData.forEach(dayData => {
            const parsedDayData = {
                datetime: dayData.datetime,
                tempmin: dayData.tempmin,
                tempmax: dayData.tempmax,
                icon: dayData.icon
            }
            const dayItem = new dayListItemComponent(parsedDayData);
            // console.log(this.#element)
            //  console.log(dayItem)
            this.#element.appendChild(dayItem.getElement());
            
        });


    }

}


class dayListItemComponent {
    #element
    constructor({datetime, tempmin, tempmax, icon}) {
        this.#renderComponent();
        this.#element.querySelector('.day-list-item_day').textContent = formatDay(datetime);
        this.#element.querySelector('.tempmax').textContent = tempmax;
        this.#element.querySelector('.tempmin').textContent = tempmin;
        this.#element.querySelector('.day-list-item_icon img').src = iconMap.get(icon);

    }
    #renderComponent(){
        //
        const template = document.getElementById('day-list-item-component');
        const clone = template.content.cloneNode(true);
        this.#element = clone.querySelector('.day-list-item-container');
        return this.#element;
;    }
    getElement(){
        return this.#element;

    }
}