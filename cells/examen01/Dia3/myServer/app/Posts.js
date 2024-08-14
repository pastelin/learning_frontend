export class Posts{
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


//module.exports = Posts;
