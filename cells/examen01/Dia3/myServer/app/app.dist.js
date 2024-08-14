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

  async getPosts(){
    const response = await fetch(this.path);
    return await response.json();
  }

  async getPostsById(id){
    const response = await fetch(this.path);
    let postsId = await response.json();
    return await postsId.filter(item => item.id == id);
  }

  async getPostsByUserId(userId){
    const response = await fetch(this.path);
    let postsUserId = await response.json();
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
const Users = require('./Users.js')
const Posts = require('./Posts.js')
const Comments = require('./Comments.js')

const users = new Users();
const posts = new Posts();
const comments = new Comments();

/*---------------> Inicio usuarios*/

users.getUsers().then(data => console.log(data));
users.getUserById(3).then(data => data.forEach(mostrarPostsUserId));
users.getUserByName('Bret').then(data => 
data.forEach(mostrarPostsUserName));

/*-----------------> Fin Usuarios*/


/*-------------> Inicion Posts*/

//posts.getPosts().then(data => console.log(data));
//posts.getPostsById(1).then(data => console.log(data));

/*--------------------> Fin Posts*/


/*------------------> Inicio Comments*/

//comments.getComments().then(data => console.log(data));
//comments.getCommentsById(1).then(data => console.log(data));

/*-------------------> Fin Comments*/


/*-----Funciones*/
const mostrarPostsUserId = (arrPost) => {
  // se guarda en la constante 'id' el valor del id del usuario
  const id = arrPost.id;

  // muestra los datos del usuario con el id indicado
  users.getUserById(id).then(data => console.log(data));

  // muestra los posts que realizó el usuario con el id indicado
  posts.getPostsByUserId(id).then(data => console.log(data));

  // muestra los comments con el id de cada posts
  posts.getPostsByUserId(id).then(data =>  
    data.forEach(mostrarCommentsPostsId));

  
}

const mostrarPostsUserName = (arrPost) => {
  const id = arrPost.id;
  const userName = arrPost.username;
  users.getUserByName(userName).then(data => console.log(data));
  posts.getPostsByUserId(id).then(data => console.log(data));
  posts.getPostsByUserId(id).then(data => 
    data.forEach(mostrarCommentsPostsId));
}

const mostrarCommentsPostsId = (arrPosts) => {
  const idPosts = arrPosts.id;
  comments.getCommentsByPostsId(idPosts).then(data =>
    console.log(data));
}


/*---Fin---*/



},{"./Comments.js":1,"./Posts.js":2,"./Users.js":3}]},{},[4]);
