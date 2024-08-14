import { LitElement, html, css } from 'lit-element';
export class SextoElemento extends LitElement {
	static get properties() {
		return {
			greeting: { type: String },
			data: { attribute: true },
			items: { type: Array },
		};
	}

	constructor() {
		super();
		this.greeting = 'Hello';
		this.data = { name: 'Cora' };
		this.items = [1, 2, 3];
	}

	render() {
		return html`
			<p>${this.greeting} ${this.data.name}.</p>
			<p>You have ${this.items.length} items.</p>
		`;
	}
}
customElements.define('sexto-elemento', SextoElemento);
