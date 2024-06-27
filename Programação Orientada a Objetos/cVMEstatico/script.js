class Person {
  age = 10;

  //o método static torna uma várival da classe, exclusiva da classe
  //sendo possível ser chamada somente por ela.
  static hands = 2;

  constructor(nome) {
    this.nome = nome;
  }
}

let p1 = new Person('Vandim')

//mostra as propriedades exclusivas da classe
console.log(Person)

//hands só é possível ser chamada pela classe exclusivamente.
console.log(`${p1.nome} tem: ${Person.hands} mãos`)