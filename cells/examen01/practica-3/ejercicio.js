var App = function(){
  console.log('inside App');
}

App.prototype.getallPeople = async function(){
  const response = await fetch('https://swapi.dev/api/people/');
  let valor = await response.json();
  let results = valor.results.filter(item =>
  item.height>119).map(item2 => item2.name);
  return results;
};


const app = new App();
console.log('names');
app.getallPeople().then(data => console.log(data));
