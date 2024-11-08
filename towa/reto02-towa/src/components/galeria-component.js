import { LitElement, html, css } from 'lit-element';
import { Galeria } from '../classes/galeria';
import Fontawesome from 'lit-fontawesome';

class GaleriaComponent extends LitElement {
	static get properties() {
		return {
			objGaleria: { type: Object },
			mensaje: { type: String },
			nombreEstilo: { type: String },
		};
	}

	constructor() {
		super();
		this.objGaleria = new Galeria();
		this.nombreEstilo = 'msg-hidden';
	}

	_mostrarAnterior() {
		let status = this.objGaleria.mostrarAnterior(this.elementoGaleriaImg);

		if (status === 'error') {
			this._setTimer('msg-error');
		}
	}

	_mostrarSiguiente() {
		let status = this.objGaleria.mostrarSiguiente(this.elementoGaleriaImg);

		if (status === 'error') {
			this._setTimer('msg-error');
		}
	}

	async _guardarImg() {
		let status = await this.objGaleria.guardarImagen(this.elementoInputFile);

		if (status === 'ok') {
			this.objGaleria.imagenDefault(this.elementoGaleriaImg);
			this._setTimer('msg-ok');
		} else {
			this._setTimer('msg-error');
		}
	}

	_setTimer(nombreEstilo) {
		this.nombreEstilo = nombreEstilo;
		this.mensaje = this.objGaleria.getMensaje();

		this.elementoBtnSiguiente.disabled = true;
		this.elementoBtnAnterior.disabled = true;

		setTimeout(
			() => (
				(this.nombreEstilo = 'msg-hidden'),
				(this.mensaje = ''),
				(this.elementoBtnSiguiente.disabled = false),
				(this.elementoBtnAnterior.disabled = false)
			),
			2000
		);
	}

	_vistaPrevia() {
		this.objGaleria.vistaPrevia(this.elementoInputFile, this.elementoImgVistaPrevia);
	}

	render() {
		return html`
			<link rel="stylesheet" href="./src/css/estilos.css" />
			<section>
				<div class="contenedor">
					<h1>Galer&iacute;a</h1>

					<div class="contenedor-imagen">
						<input type="file" id="inputFile" @change="${this._vistaPrevia}" />
						<div class="centrar-imagen">
							<div class="vista-previa">
								<img src="./src/img/desconocido.png" id="imgVistaPrevia" />
							</div>
						</div>
						<h3>Vista previa</h3>
						<button @click="${this._guardarImg}">Agregar</button>
					</div>

					<div class="contenedor-error ${this.nombreEstilo}">
						<span id="msgError"> ${this.mensaje} </span>
					</div>

					<div class="contenedor-galeria">
						<div class="centrar-galeria">
							<div class="p-l-40">
								<button id="btnAnterior" @click="${this._mostrarAnterior}">
									<i class="fas fa-chevron-circle-left"> </i>
								</button>
							</div>
							<div class="imagen-galeria">
								<img src="./src/img/desconocido.png" id="galeria" />
							</div>
							<div class="p-r-40">
								<button id="btnSiguiente" @click="${this._mostrarSiguiente}">
									<i class="fas fa-chevron-circle-right"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		`;
	}

	static get styles() {
		return [Fontawesome];
	}

	firstUpdated() {
		this.elementoInputFile = this.shadowRoot.querySelector('#inputFile');
		this.elementoImgVistaPrevia = this.shadowRoot.querySelector('#imgVistaPrevia');
		this.elementoGaleriaImg = this.shadowRoot.querySelector('#galeria');
		this.elementoMsgError = this.shadowRoot.querySelector('#msgError');
		this.elementoBtnSiguiente = this.shadowRoot.querySelector('#btnSiguiente');
		this.elementoBtnAnterior = this.shadowRoot.querySelector('#btnAnterior');
		this.objGaleria.imagenDefault(this.elementoGaleriaImg);
	}
}

customElements.define('galeria-component', GaleriaComponent);
