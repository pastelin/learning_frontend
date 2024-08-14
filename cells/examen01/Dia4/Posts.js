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
