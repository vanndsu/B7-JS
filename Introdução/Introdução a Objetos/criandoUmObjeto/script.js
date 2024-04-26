//criando um objeto
let personagem = {
    nome: 'Vanderson',
    idade: 18,
    altura: 1.89,

    //array dentro de um objeto
    olhos: ['preto','azul'],

    //um objeto dentro de um objeto
    caracteristicas: {
        forca: 560,
        defesa: 450,
        estamina: 390
    }
}

//acessando o elemento nome do objeto personagem
console.log(personagem.nome)

console.log(`${personagem.nome}, tem ${personagem.idade} anos e ${personagem.altura} de altura.
Sua estamina é de ${personagem.caracteristicas.estamina}. Ele possui ${personagem.olhos.length} olhos, sendo o da direita da cor ${personagem.olhos[1]}.`)
