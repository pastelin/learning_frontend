import {LitElement, html, css} from 'lit-element';

import './childComponent';

class ParentComponent extends LitElement {

  static get properties() {
    return {
      color: {type: String},
      childMessage: {type: String}
    }
  }


  render() {
    return html`
      <div class="contenedor-padre ${this.color}">
        <h1>Parent Component</h1>
        <slot></slot>
        <child-component childMessage="${this.childMessage}"
        @select-color-child="${this.changeColor}">
        </child-component>
      </div>
    `;
  }

  changeColor(event) {
    this.color = (event.detail.el.selectedColor);
  }

  constructor() {
    super();
    this.color = 'default';
  }

  static get styles() {
    return css`
      .contenedor-padre {
        width: 600px;
        margin: 20px auto;
        text-align: center;
        border-radius: 3px;
        color: #f2f2f2;
        overflow: hidden;
      }

      .default {
        background: rgba(52, 191, 73, .7);
      }

      .green {
        background: #34bf49;
      }

      .red {
        background: #ff4c4c;
      }

      .blue {
        background: #0099e5;
      }

      
    
    `;
  }
}

customElements.define('parent-component', ParentComponent);