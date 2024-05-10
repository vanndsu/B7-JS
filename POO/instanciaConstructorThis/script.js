//criando a classe pessoa e seus atributos.
class Person {
  //um atributo da classe pessoa que não se torna obrigatório no constructor.
  age = 0;

  //ao declarar um objeto, esse objeto terá que seguir o padrão dos atributos do constructor.
  constructor(nome, peso) {
    //this. se refere ao atributo da clase.
    //os parâmetros do constructor, são só para identificação.
    this.name = nome;
    this.weight = peso;
  }
}

//criando objetos do tipo Person.
let p1 = new Person("Capote", 110.0);
let p2 = new Person("Joffrey", 40.0);
let p3 = new Person("Vitu", 70.0);

//alterando o conteúdo do atributo age.
p1.age = 21;
console.log(`O ${p1.name} tem ${p1.age} anos e pesa ${p1.weight} Kg `);

p2.age = 26;
//alterando o conteúdo do atributo weight.
p2.weight = 65;
console.log(`O ${p2.name} tem ${p2.age} anos e pesa ${p2.weight} Kg `);

p3.age = 26;
console.log(`O ${p3.name} tem ${p3.age} anos e pesa ${p3.weight} Kg `);
