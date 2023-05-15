import html from "./utility.js";

const template = document.getElementById('temp').content;

class Sportnews extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.count = 0;
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.cloneNode(true));
        //this.querySelector("p").innerText = this.getAttribute('garchig');
        this.shadowRoot.querySelector('img').src = this.getAttribute('zurag');
    }
    connectedCallback() {
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            console.log("gg");
            const myCart = document.querySelector("news-count");
            myCart.AddToCart(this.shadowRoot);
            myCart.color = "#0f0";
            this.shadowRoot.count=this.shadowRoot.count+1;
            const icon = this.shadowRoot.querySelector("#icon");
            if (this.shadowRoot.count %2==0) {
            icon.setAttribute("style", "color: black");
            }
            else
            icon.setAttribute("style", "color: red");
            const news = document.querySelector("news-save");
            news.AddToCart(this.shadowRoot);
            news.color = "#0f0";
            
        })
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}
window.customElements.define('sport-news', Sportnews);