//criando uma função arrow function

/*const somar = (x,y) =>{

    return x + y;
}*/

//função arrow de forma reduzida(quando só há uma linha, pode-se fazer dessa maneira)

const somar = (x,y) => x+y

//arrow function mais reduzida possível(quando se tem só um parâmetro)
const sobrenome = sobre => 'Vanderson ' + sobre;


console.log(somar(4,5))
console.log(sobrenome('Ribeiro'))
