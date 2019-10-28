import { html, customElement } from "lit-element";
import {BaseComponent} from '@mycomponents/base';

@customElement('my-radio-component')
export class RadioComponent extends BaseComponent {

    constructor() {
        super();
        this.message = 'RadioComponent';
    }

    render() {
        return html`
            <p>${this.message}</p>
        `;
    }
}