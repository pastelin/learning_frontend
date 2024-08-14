console.log("---------------------->");


const myFn1 = function(a){
  return a * 2;
}

const myFn2 = (a,b) => {return a*b };

const myFn3 = a => a*2;


console.log(myFn1(5));
console.log(myFn2(2,5));
console.log(myFn3(6));



// calcular el área de un rectangulo

const rectangulo = (a, b) => { return a*b };


// calcular el áre de un triángulo

const triangulo = (a, b) => {return (a*b)/2 };



console.log(`El área del rectángulo es de ${rectangulo(3,5)}
y el del triángulo es de ${triangulo(2,5)}`);
