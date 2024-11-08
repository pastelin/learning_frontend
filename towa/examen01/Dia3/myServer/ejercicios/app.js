const promiseCallback = function() {
  return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
      req.onload = function(){
	if(req.status == 200){
	  resolve(req.response);
	}
	else{
	  reject(Error(req.statusText));
	}

      };
      req.onerror = function(){
	reject(Error("Network Error"));
      };
      req.send();
      });
}

var resolvedAnswer = function(data){
  console.debug('--resolvedAnswer--')
  console.debug(data)
}

var rejectedAnswer = function(data){
  console.debug('--rejectedAnswer')
  console.log(data)
}

promiseCallback()
  .then(resolvedAnswer, rejectedAnswer) 
  .catch(function(error){ console.log('Error:',error); })
  .finally(function(ev){ console.log('Petición finalizada'); })