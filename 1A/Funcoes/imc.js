function imc(altura,peso){
    altura,
    peso,
    imc = peso/(altura*altura);
    console.log(imc)
    if (imc<=16){
        console.log('OSSO')
    }else if(16<imc && imc<25){
        console.log('semi osso')
    }else{
        console.log('gordo')
    }
}

p1 = imc(1.75,107)
p2 = imc(1.75,50)
p3 = imc(1.75,80)
p4 = imc(1.75,70)
console.log(p1,p2,p3,p4)