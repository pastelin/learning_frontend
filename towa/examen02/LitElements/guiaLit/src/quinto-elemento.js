import { LitElement, html } from 'lit-element';
export class QuintoElemento extends LitElement {
	static get properties() {
		return {
			clicks: { type: Number },
		};
	}
	constructor() {
		super();
		this.clicks = 0;
	}
	incrementarClick() {
		this.clicks++;
		console.log('Clicks realizados:', this.clicks + 2);
	}
	render() {
		return html`
			<h1>Componente my-counter</h1>
			<p>Clicks realizados: ${this.clicks}</p>
			<button @click="${this.incrementarClick}">Haz Click</button>
		`;
	}
}
customElements.define('quinto-elemento', QuintoElemento);
