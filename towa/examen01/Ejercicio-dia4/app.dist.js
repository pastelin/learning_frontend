(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class People{
  constructor(){
    this.path = 'https://swapi.co/api/people/';
  }

  async getResponse(){
    const response = await fetch(this.path);
    return response.json();

  }

  async getPeople(){
    return await this.getResponse();
  }

  async getPeopleByName(name){
    let arr = await this.getResponse();
    return await arr.results.filter(item => item.name==name);
  }
  async getPlanetsByUrl(url){
    let response = await fetch(url);
    return await response.json();
  }
  async getSpeciesByUrl(url){
    let response = await fetch(url);
    return await response.json();
  }
  async getVehiclesByUrl(url){
    let response = await fetch(url);
    return await response.json();
  }
  async getStarshipsByUrl(url){
    let response = await fetch(url);
    return await response.json();
  }

}


module.exports = People;

},{}],2:[function(require,module,exports){
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

},{"./People.js":1}]},{},[2]);
