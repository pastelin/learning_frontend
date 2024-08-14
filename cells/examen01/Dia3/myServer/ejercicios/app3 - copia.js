const Users = require('./Users.js')
const Posts = require('./Posts.js')


class App{

const users = new Users();
const posts = new Posts();

/*---  Inicio de las funciones de Users ---*/

//users.getUsers().then(data => console.log(data));
users.getUserById(1).then(data => data.forEach(this.mostrarPost, 
this));
//users.getUserByName('Bret').then(data => console.log(data));



/*-----Funciones*/
function mostrarPost(arrPost){
  let id = arrPost.id;
}

/*------------Fin de las funcciones*/

/*---Fin---*/



/*---Inicio de las funciones de Posts---*/

//posts.getPosts().then(data => console.log(data));
//posts.getPostsById(2).then(data => console.log(data));
//posts.getPostsByUserId(2).then(data => console.log(data));
//posts.getPostsByUserName(userName).then(data => console.log(data));



/*
const userId = 2; 

const users = async function(id){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let user = await response.json();
  user.posts = await posts(user.id);
  return user;
}

const posts = async function(userId){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let userPosts = await response.json();
  return userPosts.filter(p => p.userId === userId);
}

users(userId).then((data)=> console.log(data));
*/
}
