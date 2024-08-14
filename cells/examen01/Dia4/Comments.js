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
