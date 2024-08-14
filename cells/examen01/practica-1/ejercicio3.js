let cont =0, l="p", f="papilla";
const veces = function(letra, frase){
  var n =0;
  frase.split("").forEach(function(x){
    if(letra !== x){
      n++;
    }})
    return n;

}

console.log(`el número de veces que las letras son diferentes a | ${l} | 
son ${veces(l,f)}`);
