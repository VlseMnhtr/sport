import html from './utility.js'
class NewsCount extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.products = [];
        
        if (this.getAttribute("color") != null)
            this.#Render(this.getAttribute("color"));
        else
            this.#Render();
    }

    #Render(backgroundColor = "#fff") {
        if(this.products.length>0)
        {
            this.innerHTML = html`
            <div>
            ${this.products.map(product => html`
            <div style="width: 10px;">${product.innerHTML}</div>
            `)}
            </div>
            `
        }
        else
        this.innerHTML = html`<div>Хадгалсан мэдээ байхгүй байна.</div>`
    }

    AddToCart(myProduct) {
        const productIndex = this.products.indexOf(myProduct)
        if(productIndex === -1)
        {

            this.products.push(myProduct);
        }
        else{
            this.products.splice(productIndex, 1);
        }
        this.#Render();
    }
    connectedCallback() {

    }
    disconnectedCallback() {
    }
    get productCount() {
        return this.products.length;
    }
    set color(colorValue) {
        if(this.products.length>0)
        this.#Render(colorValue);

       

    }
    static get observedAttributes() {
        return ['color'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "color":
                this.#Render(this.getAttribute("color"));
                break;

            default:
                break;
        }
    }
}
window.customElements.define('news-save', NewsCount);