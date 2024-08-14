const power = (base, exponent) => {
  if (exponent == 0) {
    return 1;
  }
  return base * power(base, exponent-1);
}
console.log(`the power of the number ${5} 
exponent ${3} is ${power(5, 3)}`);
