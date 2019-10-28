import { LitElement, html, customElement, property } from "lit-element";

@customElement('my-base-component')
export class BaseComponent extends LitElement {

    @property() message: string = 'BaseComponent';

    render() {
        return html`
            <p>${this.message}</p>
        `;
    }
}