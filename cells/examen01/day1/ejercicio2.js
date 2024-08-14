const fibonaci = function(num){
	if(num===1){
		console.log(num);
		return 0;
	}else{
	  for(let i=1; i<=num; i++)
		return num + fibonaci(num-1);
	//console.log(i);
 	}

}

console.log(fibonaci(5));
