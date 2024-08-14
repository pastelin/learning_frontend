// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
class MyElement extends LitElement {
  /**
   * Declare your element's properties by implementing a static properties getter
   */
  static get properties() {
    return {
      prop1: { type: String },
      prop2: { type: Number }
    };
  }

  /**
   * Implement 'render' to define a template for your element
   */
  render() {
    /**
     * 'render' must return a lit-html 'TemplateResult'.
     */
    return html`
      <!-- template content -->
      <h1>Wellcome</h1>
      <!-- we can bind the element´s properties to the template -->
      <h2>${this.prop1}</h2>
      <!-- we can use lit-element @event bindings to add event listeners to your component. -->
      <button @click="${this.handleClick}"> ${this.prop2} </button>
    `;
  }

  /**
   * If you implement a static properties getter, initialize your property values in the element constructor.
   */

  constructor() {
    // Always call super() first 
    super();
    // We need initialize the properties
    this.prop1 = 'To TOWA learning';
    this.prop2 = 0;
  }

  /**
   * Define styles in a tagged template literal, usin the css tag function:
   */
  static get styles() {
    return css`
      :host{
        background: #ECF0F1;
        display: block;
      }
      h1 { color: #FF3718; text-align:center; }
      h1 { color: #FFBA00; text-align:center; }
      button {
        background-color: #FF3718;
        color: #fff;
        border: 0px;
        width: 200px;
        height: 40px;
        font-size: 20px;
      }
      button:hover {
        background-color: #fd5b42;
      }
    `;
  }
  /**
   * custom property
   */
  handleClick(e) {
    this.prop2++;
  }
}

// Register the new element with the browser.
customElements.define('my-element', MyElement);