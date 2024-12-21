var total = 0;
var numeros = [1,2,3,4,5,6];
for(var i = 0; i < numeros.length; i ++){
    total += numeros[i];
}

console.log(total);


// Outra forma de fazer


var numeros2 = [2,32,4,5,65,86];
var total2 = numeros2.reduce(function(total,numero){
    return total + numero;
},0);
console.log(total2);