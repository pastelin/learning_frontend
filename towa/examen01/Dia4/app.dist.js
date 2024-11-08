(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Comments{

  constructor(){
    this.path = 'https://jsonplaceholder.typicode.com/comments';
  }

  async getResponse(){
    let response = await fetch(this.path);
    return await response.json();
  }

  async getComments(){
    return this.getResponse();
  }

  async getCommentsById(id){
    let arr = await  this.getResponse();
    return await arr.filter(item => item.id == id);
  }

  async getCommentsByPostsId(postId){
    let arr = await this.getResponse();
    return await arr.filter(item => item.postId == postId);

  }

}

module.exports = Comments;

},{}],2:[function(require,module,exports){
class Posts{
  constructor(){
    this.path = 'https://jsonplaceholder.typicode.com/posts';
  }
  async getResponse(){
    const response = await fetch(this.path);
    return response.json();

  }

  async getPosts(){
    return await this.getResponse();
  }

  async getPostsById(id){
    let postsId = await this.getResponse();
    return await postsId.filter(item => item.id == id);
  }

  async getPostsByUserId(userId){
    let postsUserId = await this.getResponse();
    return await postsUserId.filter(item => item.userId == userId);
  }

}


module.exports = Posts;

},{}],3:[function(require,module,exports){
class Users{
  constructor(){
    this.path = 'https://jsonplaceholder.typicode.com/users';
  }

  async getResponse(){
    const response = await fetch(this.path);
    return response.json();

  }

  async getUsers(){
    return await this.getResponse();
  }

  async getUserById(id){
    let arr = await this.getResponse();
    return await arr.filter(item => item.id==id);
  }

  async getUserByName(name){
    let arr = await this.getResponse();
    return await arr.filter(item => item.username == name);
  }

}


module.exports = Users;

},{}],4:[function(require,module,exports){
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

},{"./Comments.js":1,"./Posts.js":2,"./Users.js":3}]},{},[4]);
