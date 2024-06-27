class Person {
  age = 0;

  constructor(nome) {
    this.nome = nome;
  }
}

//utilizando o conceito factory em uma função
/*no exemplo abaixo, é criado um objeto do tipo Person
  onde é adicionado o nome e sua idade.*/
function createPerson(nome, idade) {
  let p = new Person(nome);
  p.age = idade;
  return p;
}

let p1 = createPerson("Vandim", 23);

//saída do exemplo
console.log(`${p1.nome} tem ${p1.age} anos`);
