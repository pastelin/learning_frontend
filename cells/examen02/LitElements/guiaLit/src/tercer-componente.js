import {LitElement, html} from 'lit-element';
class TercerComponente extends LitElement {
  static get properties() {
    return {
     list: {type: Array},
    };
  }
  constructor() {
    super();
    this.list = ['Naranja', 'Limon', 'Manzana'];
    this.counter = 0;
  }
  sort() {
    // let temporal = [...this.list.sort()]; 
    // this.list = temporal;
    
    // this.temporal = this.list.sort(); 
    // this.list = temporal;

    // this.list = [...this.list.sort()];

    // this.list.sort(); 
    // performUpdate(this.list);

    console.log(this.list);
  }
  render() {
    return html`
      <button @click="${this.sort}">ordenar Lista</button>
      <ul>${this.list.map(n => html`<li>${n}</li>`)}</ul>
      <!-- <h1>${this.list}</h1> -->
    `;
  }
}
customElements.define('tercer-componente', TercerComponente);