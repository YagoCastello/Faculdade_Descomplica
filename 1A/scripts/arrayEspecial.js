// var numeros = [1,2,3,4,5,6,7,8,9,10];

// var resultado = numeros.filter(item => item %2 == 0);

// console.log(resultado);


// var numerosFiltrados = numeros. filter(
//     function(valor){
//         return valor >5;
//     }
// );
// console.log(numerosFiltrados);

// function buscarValores(valor){
//     return valor <5;
// }
// var numerosEncontrados = numeros.filter(buscarValores);
// console.log(numerosEncontrados);

// var r1 = numeros.filter((valor) => {
//     return valor >5;
// });

// console.log(r1);

// var r2 = numeros.filter(valor => valor >5);



// var funcionarios = [
//     {nome:'Luiz',idade:62},
//     {nome:'Davi',idade:22},
//     {nome:'Arthur',idade:18},
//     {nome:'Lucas',idade:40},

// ]

// var pessoasListagem = funcionarios.filter(function(valor){
//     return valor.nome.length <5
// })

// console.log(pessoasListagem);




var produtos = [
    {id: 1, descricao: 'Smartphone',categoria:'Eletronico'},
    {id: 2, descricao: 'Notebook',categoria:'Eletronico'},
    {id: 3, descricao: 'Geladeira',categoria:'Eletrodomestico'},
    {id: 4, descricao: 'Guarda-roupa',categoria:'Movel'},
    {id: 5, descricao: 'Mesa',categoria:'Movel'},
    {id: 6, descricao: 'Tablet',categoria:'Eletronico'},
    

]

var eletronicos = produtos.filter(
    function(valor){
        return valor.categoria == 'Eletronico'
    }
)

console.log(eletronicos)