// importar las clases y guardarlas en constantes
const Users = require('./Users.js');
const Posts = require('./Posts.js');
const Comments = require('./Comments.js');

class App{

  constructor(){
    // se crea una instancia de cada clase para poder acceder a sus métodos
    this.users = new Users();
    this.posts = new Posts();
    this.comments = new Comments();
    // muestra los usernames de los usuarios
    this.users.getUsers().then(data => {
      data.forEach(this.card, this) }, this);
  }

  card(item){
    // se crea un elemento de tipo lista y se cuarda en una variable de tipo let
    let el = document.createElement('li');
    // se le asigna un id con un valor a la lista
    el.setAttribute('id', item.id)
    // coloca el valor asignado dentro de la etiqueta creada
    el.innerHTML = item.username;
    // se crea un listener, en el momento que se de cick al usernane este mostrará todos sus datos, posts y comments
    el.addEventListener('click', this.clickEvento.bind(this));
    document.querySelector('.container .left ul').appendChild(el);
  }

  clickEvento(event){
    // se guarda en una variable el objeto de la lista
    var id = event.target;
    // obtiene el id del objeto lista
    var id2 = id.getAttribute('id');
    // manda a llamar a la función fillUser pasándole como parámetro el id
    this.fillUser(id2);

  }
  fillUser(id){
    this.users.getUserById(id).then(data => {
      data.forEach(this.cardUser)
    })
    this.posts.getPostsByUserId(id).then(data => {
      data.forEach(this.cardPosts)
    })
    this.posts.getPostsByUserId(id).then(data => {
      data.forEach(this.objComments, this)
    })

  }
  // este método llena los datos del usuario
  cardUser(item2){
    document.querySelector('.container .content #name').innerText = `Name: ${item2.name}`;
    document.querySelector('.container .content #username').innerText = 
	`User Name: ${item2.username}`;
    document.querySelector('.container .content #email').innerText = `Email: ${item2.email}`;
    document.querySelector('.container .content #address').innerHTML = 
	`<strong>Address</strong>:<br> 
	  &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  street: ${item2.address.street} &nbsp; suite: ${item2.address.suite} <br> 
	  &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  city: ${item2.address.city}&nbsp;&nbsp;&nbsp; zipcode: ${item2.address.zipcode}<br>
	  &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  geo: &nbsp;&nbsp; 
	  lat: ${item2.address.geo.lat} &nbsp;&nbsp; lng: ${item2.address.geo.lng} `;
    document.querySelector('.container .content #phone').innerText = `Phone: ${item2.phone}`;
    document.querySelector('.container .content #website').innerText = 
	`Website: ${item2.website}`;
    document.querySelector('.container .content #company').innerHTML = 
	`<strong>Company:</strong> <br>
	 &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 	 name: ${item2.company.name} <br>
	 &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 catchPhrase: ${item2.company.catchPhrase}<br>
	 &nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 bs: ${item2.company.bs}`;
  }
  // este método llena los posts del usuario
  cardPosts(objPosts){
    console.log(objPosts)
  }
  // este método obtiene el objeto de comments y lo recorre con forEach que llama a una método
  objComments(objPosts){
    let idPost = objPosts.id;
    this.comments.getCommentsByPostsId(idPost).then(data => data.forEach(this.cardComments));
  }
  // llena los comments de cada posts del usuario
  cardComments(objComments){
    console.log(objComments)

  }


}
const app = new App();
