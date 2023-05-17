import html from './utility.js'

class NewsSave extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.products = [];
        
        if (this.getAttribute("color") != null)
            this.#Render(this.getAttribute("color"));
        else
            this.#Render();
    }

    #Render(backgroundColor = "#fff") {
        this.innerHTML = html`
        <div  style="width:2rem;height:auto;background-color:${backgroundColor};"><svg version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
 
    </svg>
    <div>${this.products.length}</div>
    `
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
        console.log(colorValue, "aaaaa")
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
window.customElements.define('news-count', NewsSave);