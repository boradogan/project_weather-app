import { iconMap } from "../utils/iconMap";
import { formatDay } from "../utils/formatDay";


export class dayListComponent {
    #parent = document.getElementById('day-list-component');
    #element
    #currentActiveItem
    constructor() {
        this.#renderComponent();

    }

    #renderComponent() {
        const template = document.getElementById('day-list-template');
        const clone = template.content.cloneNode(true);
        this.#element = clone.querySelector('.day-list-container');

        this.#element.addEventListener('click', (event) => {
            //identify which dayListItem is clicked
            const clickedItem = event.target.closest('.day-list-item-container');

            //If it is the selected one dont dispatch event
            if(clickedItem === this.#currentActiveItem) {
                return
            }

            //If it is a different item set it as the active one and 
            // dispatch event with the dat-id attribute to be caught in index.js
            this.updateActiveItem(clickedItem);
            // const datetime= clickedItem.dataset.id;
            // // console.log(datetimeEpoch);

            // this.#element.dispatchEvent(new CustomEvent('daySelected', {
            //     bubbles: true,
            //     detail: {datetime}
            // }))

        })


        this.#parent.appendChild(this.#element)

    }

    updateWithData(dayListData){
        //dayListData is expected to be a list of datData which will be used
        // to create child components
        this.#element.innerHTML = "";



        // For each item in the list create a component
        dayListData.forEach(dayData => {
            
            const dayItem = new dayListItemComponent(dayData);
            // console.log(this.#element)
            //  console.log(dayItem)
            this.#element.appendChild(dayItem.getElement());
            
        });

        // make the first child the active one
        const firstChild = this.#element.firstElementChild;
        if (firstChild) {
            this.updateActiveItem(firstChild);
        }


    }

    updateActiveItem(newActiveItem){
        //newActiveItem is expected to be the DOM element under day-list-container
        //dispatches an event to be handled on the index.js
        if(this.#currentActiveItem) {
            this.#currentActiveItem.classList.remove('active');

        }
        this.#currentActiveItem = newActiveItem;
        this.#currentActiveItem.classList.add('active');

        const datetime= this.#currentActiveItem.dataset.id;
            // console.log(datetimeEpoch);

        this.#element.dispatchEvent(new CustomEvent('daySelected', {
            bubbles: true,
            detail: {datetime}
        }))


    }

}


class dayListItemComponent {
    #element
    #dayData
    #id;
    constructor(dayData) {
        this.#dayData = dayData;
        this.#id = dayData.datetime;
        this.#renderComponent();
        const {datetime, tempmin, tempmax, icon} = dayData;
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
        this.#element.dataset.id = this.#id;
        return this.#element;
;    }
    getElement(){
        return this.#element;

    }

    get dayData() {
        return this.#dayData;
    }
}