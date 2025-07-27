

export class searchBarComponent {
    #element
    #parent = document.getElementById('search-bar-component');
    #form
    constructor() {
        this.#renderComponent();


    }

    #renderComponent() {
        const template = document.getElementById('search-bar-template');
        const clone = template.content.cloneNode(true);
        this.#element = clone.querySelector('.search-bar-container');
        this.#form = this.#element.querySelector('form');

        this.#parent.appendChild(this.#element);
        this.#handleFormSubmit();

        
    }


    #handleFormSubmit() {
        this.#form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(this.#form);
            console.log(formData)
            const customEvent = new CustomEvent('search-submit', {
                bubbles: true,
                detail: Object.fromEntries(formData.entries())
            });
            this.#form.dispatchEvent(customEvent);
        })


    }

}