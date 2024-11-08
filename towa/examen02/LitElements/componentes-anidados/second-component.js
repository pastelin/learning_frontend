import { LitElement, html, css } from 'lit-element';

class SecondComponent extends LitElement {

  static get properties() {
    return {
      prop2: {type: String},
      prop3: {type: Number}
    }
  }

  render() {
    return html`
      <div class="contenedor-hijo">
        <h2>${this.prop2}</h2>
        <button @click="${this.eventPushMe}">Presioname</button>
      </div>
    `;
  }

  eventPushMe() {
    this.prop3++;
    this.dispatchEvent(new CustomEvent('someone-push-me', 
    {
      detail: {
        bubbles: true, 
        el:this
      }
    }
    ));
  }

  constructor() {
    super();
    this.prop3 = 0;
  }

  static get styles() {
    return css`
      .contenedor-hijo {
        background: #80FFAC;
        color: rgba(0,0,0,.5);
        text-align: center;
        margin: 20px 10px;
        paddind: 20px 10px;
      }
      button {
        display: inline-block;
        padding: 20px;
        border: 1px solid #6f6f6f;
        border-radius: 3px;
        margin-bottom: 20px;
        background: rgba(242,242,242,.7);
      }

      button:hover { 
        background: #f2f2f2;
      }
    `;
  }
}

customElements.define('second-component', SecondComponent);