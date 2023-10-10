class Person {
  //instanciando dentro da classe atributos padrões para os objetos
  _age = 0;
  steps = 0;

  //o construtor é um modelo padrão que os objetos devem seguir.
  constructor(firstname, lastname) {
    this.fisrtname = firstname;
    this.lastname = lastname;
  }

  takeAStep() {
    this.steps = this.steps + 1; //pega os passos atuais do objeto e adiciona + 1;
  }

  get age() {
    return this._age;
  }
  set age(idd) {
    if (typeof idd == "number") {
      this._age = idd;
    }
  }
  get fullName() {
    return `${this.fisrtname} ${this.lastname}`;
  }
}

let p1 = new Person("João", "Silva"); //instanciando um nome ao modelo feito no construtor
let p2 = new Person("Maria", "Ribeiro");
let p3 = new Person("Edi", "Vania");

p1.age = 101; //alterando a instancia feita dentro da classe, somente para p1, o restante terá a instancia padrão
console.log(`A Pessoa 1 tem o nome: ${p1.fullName}, e ${p1.age} anos`);
