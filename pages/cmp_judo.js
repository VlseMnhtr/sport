const template = document.createElement('template');
template.innerHTML = `
    <div class="cmp-medee">
        <p><slot name="garchig" /></p>
        <img />
    </div>
`;

class CmpMedee extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    //    this.shadowRoot.querySelector('p').innerText = this.getAttribute('garchig');
        this.shadowRoot.querySelector('img').src = this.getAttribute('zurag')
    }
}

window.customElements.define('cmp-medee', CmpMedee);