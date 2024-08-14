import { LitElement, html } from 'lit-element';
export class CuartoElemento extends LitElement {
	static get properties() {
		return {
			number: { type: Number },
			manager: { type: Boolean },
			type: { type: Number },
			counter: { type: Number },
		};
	}
	constructor() {
		super();
		this.number = 1;
		this.manager = true;
		this.type = 1;
		this.counter = 0;
	}
	handleClick(e) {
		if (this.manager) {
			this.number *= this.type;
		} else {
			this.number += this.type;
		}
		if (this.counter % 2) {
			this.type += 3;
		} else {
			this.type -= 1;
		}
		this.counter++;
		this.manager = !this.manager;
	}
	render() {
		return html`
			<h1>Numero: ${this.number}</h1>
			<button @click="${this.handleClick}">Cambiar</button>
		`;
	}
}
customElements.define('cuarto-elemento', CuartoElemento);
