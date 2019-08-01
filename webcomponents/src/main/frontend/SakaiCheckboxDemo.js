import { LitElement, html, css } from './assets/lit-element/lit-element.js';
import {SakaiElement} from "./sakai-element.js";

export class MyCheckbox extends SakaiElement {

    static get properties() {
        return {
            checkboxlabel: {
                type: String,
                // attribute: 'checkbox-label',
                // reflect: true
            },
            checkboxid: {
                type: String,
                // attribute: 'checkbox-id',
                // reflect: true
            },
            ischecked: {
                type: Boolean
            }
        };
    }
    constructor() {
        super();
        this.checkboxlabel;
        this.checkboxid;
        this.ischecked;
    }

    render() {

        return html`
            <!-- start MyCheckbox template -->
            <label class="sr-only" for="${this.checkboxid}">
                <span>${this.checkboxlabel}</span>
            </label>
            <input type="checkbox" class="sakai-checkbox" 
                aria-label="${this.checkboxlabel}"
                id="${this.checkboxid}"
                .checked="${this.ischecked}"/>
            <!-- end MyCheckbox template -->
        `;

    }

    attributeChangedCallback(name, oldval, newval) {
        console.log(name, newval);
        super.attributeChangedCallback(name, oldval, newval);
    }
}

customElements.define("chk-box", MyCheckbox);
