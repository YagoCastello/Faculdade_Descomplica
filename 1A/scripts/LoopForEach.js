var a = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor));
// Até aqui printa todos os valores do Array


// Daqui pra Baixo vai somar todos os valores do array em uma variavel
var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);


// Mostrando o indice do array
console.log('olá')
a.forEach(function(valor,indice,array){
    console.log(indice,array[indice],valor,array);
})