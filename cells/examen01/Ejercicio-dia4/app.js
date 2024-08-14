const People = require('./People.js')

class App{
  constructor(){
    this.people = new People();
    this.people.getPeople().then(data => {
      data.results.forEach(this.card, this)}, this);
  }
  card(objPeople){

    let el = document.createElement('div');
    el.setAttribute('id', objPeople.name);
    el.setAttribute('class', 'btn');
    el.innerHTML = objPeople.name;
    el.addEventListener('click', this.clickEvento.bind(this));
    document.querySelector('.container .contenedor-derecho').appendChild(el);

  }

  clickEvento(evento){
    var evenDiv = evento.target;
    var name = evenDiv.getAttribute('id');
    this.fillPeople(name);
  }

  fillPeople(name){
    this.people.getPeopleByName(name).then(data => {
      data.forEach(this.cardPeople, this)
    });


  }

  cardPeople(objPeople){
    document.getElementById('title').innerText = objPeople.name;
    document.getElementById('1').innerHTML = `name: <span class="izquierda">${objPeople.name}</span>`;
    document.getElementById('2').innerHTML = `height: <span class="izquierda">${objPeople.height}</span>`;
    document.getElementById('3').innerHTML = `mass: <span class="izquierda">${objPeople.mass}</span>`;
    document.getElementById('4').innerHTML = `hair_color: <span class="izquierda">${objPeople.hair_color}</span>`;
    document.getElementById('5').innerHTML = `skin_color: <span class="izquierda">${objPeople.skin_color}</span>`;
    document.getElementById('6').innerHTML = `eye_color: <span class="izquierda">${objPeople.eye_color}</span>`;
    document.getElementById('7').innerHTML = `birth_year: <span class="izquierda">${objPeople.birth_year}</span>`;
    document.getElementById('8').innerHTML = `gender: <span class="izquierda">${objPeople.gender}</span>`;
    let urlP = objPeople.homeworld;
    let urlS = objPeople.species;
    let urlSt = objPeople.starships[0];
    let urlV = objPeople.vehicles[0];
    this.people.getPlanetsByUrl(urlP).then(data => console.log(data));
    this.people.getSpeciesByUrl(urlS).then(data => console.log(data));
    this.people.getVehiclesByUrl(urlV).then(data => console.log(data));
    this.people.getStarshipsByUrl(urlSt).then(data => console.log(data));
  }

}


const app = new App();
