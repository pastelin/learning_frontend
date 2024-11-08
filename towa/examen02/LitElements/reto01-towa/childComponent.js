import {LitElement, html, css} from 'lit-element';

class ChildComponent extends LitElement {

  static get properties() {
    return {
      childMessage: {type: String},
      selectedColor: {type: String}
    }
  }

  render() {
    return html`
      <div class="contenedor-hijo">
        <h1>CHILD COMPONENT</h1>
        <h3>${this.childMessage}</h3>
        <input type="text" @input="${this.updateMessage}"  .value="${this.childMessage}" />
        <button @click="${this.selectRedColor}" class="red">Red</button>
        <button @click="${this.selectBlueColor}" class="blue">Blue</button>
        <button @click="${this.selectGreenColor}" class="green">Green</button>
      </div>
    `;
  }

  selectRedColor() {
    this.selectedColor = 'red';
    this.eventSelectColor();
  }

  selectBlueColor() {
    this.selectedColor = 'blue';
    this.eventSelectColor();
  }
  
  selectGreenColor() {
    this.selectedColor = 'green';
    this.eventSelectColor();
  }
  
  eventSelectColor() {
    this.selectedColor;
    this.dispatchEvent(new CustomEvent('select-color-child', 
    {
      detail: {
        bubblees: true,
        el:this
      }
    }));
  }
  updateMessage(event) {
    this.childMessage = event.target.value;
  }

  static get styles() {
    return css`
      .contenedor-hijo {
        overflow: hidden;
        margin: 10px;
        background: #f8f8f8;
        color: rgba(0,0,0,.6);
      }

      button {
        display: block;
        margin: 15px auto;
        width: 20%;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #f8f8f8;
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

      input {
        width: 50%;
        border: none;
        padding: 10px 15px;
        text-align: center;
        border: 2px solid transparent;
        font-size: 17px;
        color: rgba(0,0,0,.8);
        cursor: pointer;
        border-radius: 3px;
      }

      input:focus {
        border-bottom: 2px solid rgba(0,0,0, .7);
        outline: none;
      }
    `;
  }
}

customElements.define('child-component', ChildComponent);