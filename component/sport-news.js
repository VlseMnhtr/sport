
import html from "./utility.js";

class Sportnews extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.count = 0;
        this.innerHTML = html`
        <div class="sport-news">
        
            <img src="https://picsum.photos/300/150.webp?random=${Math.random() * 100}" alt="">
            <p>asdf arwr sdfas dfawer asdfasdfaewr</p>
         
            <button role="button"><i id="icon" class="fa-solid fa-bookmark fa-2x"></i></button>
            
        </div>`
        
    }
    connectedCallback() {
        this.querySelector("button").addEventListener("click", () => {
            const myCart = document.querySelector("news-count");
            myCart.AddToCart(this);
            myCart.color = "#0f0";
            this.count=this.count+1;
            const icon = this.querySelector("#icon");
            if (this.count %2==0) {
            icon.setAttribute("style", "color: black");
            }
            else
            icon.setAttribute("style", "color: red");
            const news = document.querySelector("news-save");
            news.AddToCart(this);
            news.color = "#0f0";
            
        })
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}
window.customElements.define('sport-news', Sportnews);