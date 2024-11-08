const promiseCallback = function(){
  return new Promise((resolve, reject) =>{

  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => {
    if(response.status==200){
     resolve(response.json())
    }else{
      reject(response);
    }
  })
  .catch((error) => console.info(error))

  })
}

var resolvedAnswer = function(data){
  console.debug('--resolvedAnswer--')
  console.debug('->', data)
}

var rejectedAnswer = function(data){
  console.debug('--rejectedAnswer--')
  console.debug('-->', data)
}

promiseCallback().then(resolvedAnswer, rejectedAnswer)

console.log("fsad");
