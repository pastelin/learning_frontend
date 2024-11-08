export class Datos {
	constructor() {
		this.contenedorContenido = document.querySelector('#contenido');
	}

	showPersonalData = (datos) => {
		let contenido = '';

		contenido = `
      <h1>${datos.name}</h1>
      <div class="formato-datos">
        <div class="subtitulos">
          <p>name</p> 
          <p>height</p> 
          <p>mass</p> 
          <p>hair_color</p> 
          <p>skin_color</p> 
          <p>eye_color</p> 
          <p>birth_year</p> 
          <p>gender</p> 
        </div>
        <div class="align-right">
          <p>${datos.name}</p> 
          <p>${datos.height}</p> 
          <p>${datos.mass}</p> 
          <p>${datos.hair_color}</p> 
          <p>${datos.skin_color}</p> 
          <p>${datos.eye_color}</p> 
          <p>${datos.birth_year}</p> 
          <p>${datos.gender}</p> 
        </div>
      </div>
    `;
		this.contenedorContenido.innerHTML = contenido;
	};

	showHomeworldData(datos) {
		let contenido = '';
		if (datos != null && datos != '' && datos != undefined) {
			contenido = `
        <h1>${datos.name}</h1>
        <div class="formato-datos">
          <div class="subtitulos">
            <p>name</p> 
            <p>rotation_period</p>
            <p>orbital_period</p> 
            <p>diameter</p> 
            <p>climate</p> 
            <p>gravity</p> 
            <p>terrain</p> 
            <p>surface_water</p> 
            <p>population</p> 
          </div>
          <div class="align-right">
            <p>${datos.name}</p> 
            <p>${datos.rotation_period}</p> 
            <p>${datos.orbital_period}</p> 
            <p>${datos.diameter}</p> 
            <p>${datos.climate}</p> 
            <p>${datos.gravity}</p> 
            <p>${datos.terrain}</p> 
            <p>${datos.surface_water}</p> 
            <p>${datos.population}</p> 
          </div>
        </div>
        `;
		} else {
			contenido = `
        <h1>No hay resultados</h1>
      `;
		}

		this.contenedorContenido.innerHTML = contenido;
	}

	showSpeciesData(datos) {
		let contenido = '';

		if (datos != null && datos != '' && datos != undefined) {
			contenido = `
        <h1>${datos.name}</h1>
        <div class="formato-datos">
          <div class="subtitulos">
            <p>name</p> 
            <p>classification</p>
            <p>designation</p> 
            <p>average_height</p> 
            <p>skin_colors</p> 
            <p>hair_colors</p> 
            <p>average_lifespan</p> 
            <p>homeworld</p> 
            <p>language</p> 
          </div>
          <div class="align-right">
            <p>${datos.name}</p> 
            <p>${datos.classification}</p> 
            <p>${datos.designation}</p> 
            <p>${datos.average_height}</p> 
            <p>${datos.skin_colors}</p> 
            <p>${datos.hair_colors}</p> 
            <p>${datos.average_lifespan}</p> 
            <p>${datos.homeworld}</p> 
            <p>${datos.language}</p> 
          </div>
        </div>
        `;
		} else {
			contenido = `
        <h1>No hay resultados</h1>
      `;
		}
		this.contenedorContenido.innerHTML = contenido;
	}

	showVehiclesData(datos) {
		let contenido = '';

		if (datos != null && datos != '' && datos != undefined) {
			contenido = `
        <h1>${datos.name}</h1>
        <div class="formato-datos">
          <div class="subtitulos">
            <p>name</p> 
            <p>model</p>
            <p>manufacturer</p> 
            <p>cost_in_credits</p> 
            <p>length</p> 
            <p>max_atmosphering_speed</p> 
            <p>crew</p> 
            <p>passengers</p> 
            <p>cargo_capacity</p> 
            <p>consumables</p> 
            <p>vehicle_class</p> 
          </div>
          <div class="align-right">
            <p>${datos.name}</p> 
            <p>${datos.model}</p> 
            <p>${datos.manufacturer}</p> 
            <p>${datos.cost_in_credits}</p> 
            <p>${datos.length}</p> 
            <p>${datos.max_atmosphering_speed}</p> 
            <p>${datos.crew}</p> 
            <p>${datos.passengers}</p> 
            <p>${datos.cargo_capacity}</p> 
            <p>${datos.consumables}</p> 
            <p>${datos.vehicle_class}</p> 
          </div>
        </div>
        `;
		} else {
			contenido = `
        <h1>No hay resultados</h1>
      `;
		}
		this.contenedorContenido.innerHTML = contenido;
	}

	showStarshipsData(datos) {
		let contenido = '';

		if (datos != null && datos != '' && datos != undefined) {
			contenido = `
        <h1>${datos.name}</h1>
        <div class="formato-datos">
          <div class="subtitulos">
            <p>name</p> 
            <p>model</p>
            <p>manufacturer</p> 
            <p>cost_in_credits</p> 
            <p>length</p> 
            <p>max_atmosphering_speed</p> 
            <p>crew</p> 
            <p>passengers</p> 
            <p>cargo_capacity</p> 
            <p>consumables</p> 
            <p>hyperdrive_rating</p> 
            <p>MGLT</p> 
            <p>starship_class</p> 
          </div>
          <div class="align-right">
            <p>${datos.name}</p> 
            <p>${datos.model}</p> 
            <p>${datos.manufacturer}</p> 
            <p>${datos.cost_in_credits}</p> 
            <p>${datos.length}</p> 
            <p>${datos.max_atmosphering_speed}</p> 
            <p>${datos.crew}</p> 
            <p>${datos.passengers}</p> 
            <p>${datos.cargo_capacity}</p> 
            <p>${datos.consumables}</p> 
            <p>${datos.hyperdrive_rating}</p> 
            <p>${datos.MGLT}</p> 
            <p>${datos.starship_class}</p> 
          </div>
        </div>
        `;
		} else {
			contenido = `
        <h1>No hay resultados</h1>
      `;
		}
		this.contenedorContenido.innerHTML = contenido;
	}
}
