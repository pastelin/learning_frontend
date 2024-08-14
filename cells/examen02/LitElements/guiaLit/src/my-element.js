import {LitElement, html} from 'lit-element';
class MyElement extends LitElement {
  static get properties() {
    return {
      counter: {type: Number},
      url: { type: String}
    };
  }
  constructor() {
    super();
    this.counter = 0;
    this.url = 'https://www.google.com/'
  }
  
  handleCounter() {
    this.counter++;
  }

  render() {
    return html`
      <button @click="${this.handleCounter}">Counter++</button>
      <p>Counter: ${this.counter}</p>
      <a href="${this.url}">Google</a>
    `;
  }
}
customElements.define('my-element', MyElement);