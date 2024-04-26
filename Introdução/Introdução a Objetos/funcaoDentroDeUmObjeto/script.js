let pessoa = {
  nome: "Vanderson",
  sobrenome: "Ribeiro",
  idade: 19,

  //não é preciso dar nome a função, pois o próprio elemento do objeto já é o nome.

  //função dentro de objeto com arrow function
  nomeCompleto: () => {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
  },

  //função dentro de objeto da forma comum.
  nomeCompleto: function () {
    //this se dar para aessar um elemento do próprio objeto
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(pessoa.nomeCompleto());
