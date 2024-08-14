export class Users{
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


//module.exports = Users;
