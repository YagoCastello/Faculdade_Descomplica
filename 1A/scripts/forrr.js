var carro = [{modelo:'Audi A3',marca :'Audi', ano: 2020},
    {modelo:'Compass',marca :'Jeep', ano: 2018}]

// for (let caracteristica in carro){
//     console.log(carro[caracteristica]);
// }

var carro2 = {modelo:'Audi A3',marca :'Audi', ano: 2020}
    
// console.log('separa')
// for (let caracteristica in carro2){
//     console.log(carro2[caracteristica]);
// }



for (let c of carro){
    console.log(c.ano)
}