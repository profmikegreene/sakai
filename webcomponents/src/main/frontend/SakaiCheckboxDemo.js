import {SakaiElement} from "./sakai-element.js";
import {
    LitElement,
    html,
    css,
} from './assets/lit-element/lit-element.js';

export class MyCheckbox extends SakaiElement {

    constructor() {
        super();
        this.sakLabel;

    }
    static get properties() {
        return {
            sakLabel: {type:String},
        };
    }


    render() {

        return html `<input type="checkbox" class="sakai-permission-checkbox" aria-label="${this.sakLabel}"/>
    `;

    }

}

customElements.define("chk-box", MyCheckbox);
