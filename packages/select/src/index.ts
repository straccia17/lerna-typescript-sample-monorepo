import { html, customElement } from "lit-element";
import {BaseComponent} from '@mycomponents/base';

@customElement('my-select-component')
export class SelectComponent extends BaseComponent {

    constructor() {
        super();
        this.message = 'SelectComponent';
    }

    render() {
        return html`
            <p>${this.message}</p>
        `;
    }
}