// var jogo = "Barcelona vs Real melhor time";

// var val = jogo.includes("Real");
// console.log(val)

// var str1 = "Hello";
// var str2 = "Turma";

// var str3 = str1.concat(str2);
// console.log(str3);


// var frase = "       olá vc está aprendendo javascript       ";
// console.log(frase.trim());

// var num = "1,2,3,4,5,6,7,8,9,10";
// var arr = num.split(",");
// console.log(arr[6]);

var s = "JavaScript e Python";

var pos1 = s.indexOf("Python")
var novaString = s.substring(13,19)
console.log(novaString)

var frase2 = "Olá mundo";
nova = frase2.replace("mundo","pessoal".toLocaleUpperCase());
console.log(nova);

var frase = "Olá mundo"
if(frase.startsWith("Olá")){
    let sub = frase.substring(4);
    let novaString2 = sub.replace("mundo","pessoal")
    let novaStringMaiuscula = novaString2.toUpperCase();
    console.log(novaStringMaiuscula);
}