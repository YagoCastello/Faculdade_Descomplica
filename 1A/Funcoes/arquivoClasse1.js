class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }
}
class SmartPhone extends DispositivoEletronico{
    constructor(nome,cor,model){
        super(nome);
        this.cor = cor;
        this.modelo = this.modelo;

    }
}

var s1 = new SmartPhone("Samsung","Azul","A71")
console.log(s1);
s1.ligar();
console.log(s1);
s1.ligar();
