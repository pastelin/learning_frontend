import { LitElement, html, css } from 'lit-element';

export class CreateRender extends LitElement {
	static get styles() {
		return css`
			p {
				background: #000;
			}
		`;
	}

	render() {
		return html` <p>This template renders without shadow DOM.</p> `;
	}
	createRenderRoot() {
		/**
		 * Render template without shadow DOM. Note that shadow DOM features like
		 * encapsulated CSS and slots are unavailable.
		 */
		return this;
	}
}
customElements.define('create-render', CreateRender);
