import { LitElement, html } from 'lit-element';

class Properties01Element extends LitElement {
	static get properties() {
		return {
			prop1: { type: String, attribute: true },
			prop2: { type: Number },
			prop3: { type: Boolean },
			prop4: { type: Array },
			prop5: { type: Object },
		};
	}

	constructor() {
		super();
		this.prop1 = 'Adios';
		this.prop2 = 0;
		this.prop3 = false;
		this.prop4 = [];
		this.prop5 = {};
	}

	// si reflect es false no se ejecuta esta funcion para changeAttributes,
	// reflect por defecto tiene el valor de false
	attributeChangedCallback(name, oldVal, newVal) {
		console.log('attribute change: ', name, newVal);
		super.attributeChangedCallback(name, oldVal, newVal);
	}

	render() {
		return html`
			<p>prop1 ${this.prop1}</p>
			<p>prop2 ${this.prop2}</p>
			<p>prop3 ${this.prop3}</p>

			<p>prop4: ${this.prop4.map((item, index) => html`<span>[${index}]:${item}&nbsp;</span>`)}</p>

			<p>
				prop5:
				${Object.keys(this.prop5).map(
					(item) => html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`
				)}
			</p>

			<button @click="${this.changeProperties}">change properties</button>
			<button @click="${this.changeAttributes}">change attributes</button>
		`;
	}

	changeAttributes() {
		let randy = Math.floor(Math.random() * 10);
		let myBool = this.getAttribute('prop3');

		this.setAttribute('prop1', randy.toString());
		this.setAttribute('prop2', randy.toString());
		this.setAttribute('prop3', myBool ? '' : null);
		this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
		this.setAttribute('prop5', JSON.stringify(Object.assign({}, this.prop5, { [randy]: randy })));
		// this.requestUpdate();
	}

	changeProperties() {
		let randy = Math.floor(Math.random() * 10);
		let myBool = this.prop3;

		this.prop1 = randy.toString();
		this.prop2 = randy;
		this.prop3 = !myBool;
		this.prop4 = [...this.prop4, randy];
		this.prop5 = Object.assign({}, this.prop5, { [randy]: randy });
	}

	updated(changedProperties) {
		changedProperties.forEach((oldValue, propName) => {
			console.log(`${propName} changed. oldValue: ${oldValue}`);
		});
	}
}

customElements.define('properties01-element', Properties01Element);
