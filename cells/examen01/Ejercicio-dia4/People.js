class People{
  constructor(){
    this.path = 'https://swapi.dev/api/people/';
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
