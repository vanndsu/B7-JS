let pessoa = {
    nome: 'Vann',
    sobrenome: 'Ribeiro',
    idade: 43,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(pessoa.nomeCompleto())