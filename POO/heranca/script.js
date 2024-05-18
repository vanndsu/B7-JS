class Person {
  age = 10;

  constructor(nome) {
    this.nome = nome;
  }

  sayHi() {
    console.log(`${this.nome} diz oi!`);
  }
}

//uma nova classe herdando os atributos da classe Person
class Student extends Person {
  constructor(nome, id) {
    //herdando o nome do construtor usando o super para chamar.
    super(nome);
    this.id = id;
  }

  sayHello() {
    //chamando uma função existente na classe Person
    super.sayHi();
  }
}

let p1 = new Person("Vandim");
let s1 = new Student("Glau", 1);

console.log(s1.nome, "tem matricula", s1.id);
s1.sayHi();
