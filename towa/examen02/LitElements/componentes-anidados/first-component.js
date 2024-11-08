import { LitElement, html, css } from 'lit-element';

import './second-component';

class FirstComponent extends LitElement {

  static get properties() {
    return {
      prop1: {type: String},
      prop4: {type: Number }
    }
  }

  render() {
    return html`
      <h1>${this.prop1}</h1>
      <slot name="padre"></slot>
      <div>contador: ${this.prop4}</div>
      <second-component id="hijo" prop2="Second Component"
      @someone-push-me="${this.someonePush}"></second-component>
    `;
  }

  someonePush(event) {
    let usandoRenderRoot = this.renderRoot.querySelector('second-component');
    console.log(usandoRenderRoot);
    this.prop4 = (event.detail.el.prop3);
  }

  constructor() {
    super();
    this.prop4 = 0;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 8px;
        background: #80C6FF;
      }
    `;
  }
}

customElements.define('first-component', FirstComponent);