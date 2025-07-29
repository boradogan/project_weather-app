

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
            const dayItem = new dayListItemComponent(dayData);
            // console.log(this.#element)
            //  console.log(dayItem)
            this.#element.appendChild(dayItem.getElement());
            
        });


    }

}


class dayListItemComponent {
    #element
    constructor(dayData) {
        this.#renderComponent();

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