// <gobi-productlist></gobi-productlist>
import "./sport-news.js";

class SportnewsList extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.innerHTML = `
        <style> 
        .sport-newslist{
            display:flex;
            flex-direction: ${ this.getAttribute("direction") }; 
            gap:2ch;
            flex-wrap: wrap;}

        .sport-newslist > sport-news{
            flex: 1 1;
        }
      </style>
    <div class="sport-newslist">
        <sport-news></sport-news>
        <sport-news></sport-news>
        <sport-news></sport-news>
    
    
    </div>`;
    }
    connectedCallback() {

    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('sport-newslist', SportnewsList);