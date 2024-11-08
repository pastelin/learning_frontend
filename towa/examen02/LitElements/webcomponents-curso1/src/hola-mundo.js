import {LitElement, html} from 'lit-element';

class HolaMundo extends LitElement {

  static get properties() {
    return {
      quien: { type: String }
    };
  }

  render() {
    return html`
     <input type="file" value="Selecciona foto">
      <!-- <p>Hola <b>${this.quien}</b></p> -->
    `;
  }
}

customElements.define('hola-mundo', HolaMundo);