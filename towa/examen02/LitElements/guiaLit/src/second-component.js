import { LitElement, html } from 'lit-element';
class SecondComponent extends LitElement {
	static get properties() {
		return {
			counter: { type: Number },
		};
	}
	constructor() {
		super();
		this.counter = 0;
	}
	handleCounter() {
		this.counter = this.counter * 3;
		console.log(this.counter);
	}
	render() {
		return html`
			<button @click="this.handleCounter">Counter++</button>
			<p>Counter: ${this.counter}</p>
		`;
	}
}
customElements.define('second-component', SecondComponent);
