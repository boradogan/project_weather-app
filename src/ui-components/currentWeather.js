
import { iconMap } from "../utils/iconMap"

export class currentWeatherComponent{
    #element
    #parent = document.getElementById('current-weather-component')
    #dataInputTextElements = {}
    #dataInputIconElements = {}
    constructor(){
        this.#renderComponent();
        this.#initDataInputElements();

    }

    #renderComponent() {
        // Find the template of the component from template.html 
        const template = document.getElementById('current-weather-template');
        const clone = template.content.cloneNode(true);
        this.#element = clone.querySelector('.current-weather-container');
         
        this.#parent.appendChild(this.#element);


    }

    #initDataInputElements() {
        // Find and index the elements that needs to be updated with data from parent components
        this.#dataInputTextElements.resolvedAddress = this.#element.querySelector(".resolved-address");
        this.#dataInputTextElements.temperature = this.#element.querySelector('.temperature');
        this.#dataInputTextElements.conditionText = this.#element.querySelector('.condition-text');
        
        this.#dataInputIconElements.icon = this.#element.querySelector('.weather-icon img');
        console.log(this.#dataInputTextElements)
    }

    updateWithData(currentWeatherData){
        // update text based elements
        for (const elementKey in this.#dataInputTextElements) {
            this.#dataInputTextElements[elementKey].textContent = currentWeatherData[elementKey];
            console.log('updating Data');
        }

        // update url based elements
        for (const elementKey in this.#dataInputIconElements) {
            let newSource
            console.log(elementKey)
            if(iconMap.has(currentWeatherData[elementKey])){

                newSource = iconMap.get(currentWeatherData[elementKey])
            } else{
                newSource = iconMap.get("default");

            }
            this.#dataInputIconElements[elementKey].src = newSource;


            console.log(iconMap[currentWeatherData[elementKey]]);
        }
        this.#show();

    }

    #hide(){
        this.#element.classList.add('hidden');

    }

    #show() {
        this.#element.classList.remove('hidden');

    }


}