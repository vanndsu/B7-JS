
//factory: uma função que cria algo, no caso abaixo, cria um obejeto de pessoa.
function createPerson(nome,sobrenome,idade){
    return{
        nome,
        sobrenome,
        idade
    }
}

//criando um objeto no padrão estabelecido na função
let pessoa1 = createPerson('Vandim','Ribeiro',10);

console.log(pessoa1.nome)