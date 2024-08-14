const Users = require('./Users.js');

const users = new Users();

users.getUsers().then(data =>);


var card = function(item){
var body = document.querySelector('body');

var container = document.createElement('div');
 
var elname = document.createElement('div');
elname.innerHTML = 'Name: <span id="name">...</span>'
var elusername = document.createElement('div');
elusername.innerHTML = 'UserName: <span id="username">...</span>'
var elmail = document.createElement('div');
elmail.innerHTML = 'Email: <span id="email">...</span>'

container.appendChild(elname);
container.appendChild(elusername);
container.appendChild(elmail);


}
