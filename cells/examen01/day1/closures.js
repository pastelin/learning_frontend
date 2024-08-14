const demo = function(url){
  console.log(url);
  return function(pagina){
    console.log(`${url} ${pagina}`);
      return function(id){
	console.log(`${url}${pagina}${id}`);
	  return function(nombre){
	    console.log(`${url}${pagina}${id}${nombre}`)
	  }
      }
  }


}

var d = demo('http://algo.com');
var e = d('/products');
var f = e('/001');
f('/juan');
