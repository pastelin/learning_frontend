function fibonaci(num){

	var fibo = [1,1]; 

	if(num==0){
	  return 1;
	}
	else{
	  for(let i = 2; i<num; i++){
		fibo[i] = fibo[i-1] + fibo[i-2];
	  }
	  return fibo;
 	}
	

}

console.log(fibonaci(7));
