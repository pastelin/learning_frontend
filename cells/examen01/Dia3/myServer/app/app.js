import { Posts } from "./Posts.js";
import { Users } from "./Users.js";
import { Comments } from "./Comments.js";

/*
const Users = require('./Users.js')
const Posts = require('./Posts.js')
const Comments = require('./Comments.js')
*/
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


