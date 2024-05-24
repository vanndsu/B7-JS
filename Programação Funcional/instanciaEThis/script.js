//factory: uma função que cria algo, no caso abaixo, cria um obejeto de pessoa.
function createPerson(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
    //maneira 1
    fullName(){
        return `${this.nome} ${this.sobrenome}`
    },
    //maneira2
    nomeCompleto: `${nome} ${sobrenome}`
    
  };
}


let pessoa1 = createPerson("Vandim", "Ribeiro", 10);
let pessoa2 = createPerson("Joffrey", "Ribeiro", 10);

console.log(pessoa1.nomeCompleto);
