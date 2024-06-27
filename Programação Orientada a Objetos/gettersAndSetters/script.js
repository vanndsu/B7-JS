class Person {
  _age = 0;

  constructor(firstName, lastName) {
    this.nome = firstName;
    this.sobrenome = lastName;
  }

  //a função get retorna atributos de uma classe
  get fullName() {
    return `${this.nome} ${this.sobrenome}`;
  }

  get age() {
    return this._age;
  }

  //a função set atribui um valor ao atributo da classe
  set age(idade) {
    if (typeof idade == "number") this._age = idade;
  }
}

let p1 = new Person("João", "Da Silva");

p1.age = 24;
console.log(p1.fullName + " tem: " + p1.age + " anos");
