// 1 - Forma de criar objetos

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome'])

// 2 - Forma de criar objetos
const funcionario = new Object();
funcionario.nome = 'Karen';
funcionario.sobrenome = 'Joana'

console.log(funcionario.nome)

//3- forma de criar objetos

function criarPessoa(nome,sobrenome,i){
    return {
        nome,
        sobrenome,
        idade:i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Arthur","Silva");

const p2 = criarPessoa("João","Silva",34)
console.log(p1)
console.log(p2)
console.log(p1.nome)
