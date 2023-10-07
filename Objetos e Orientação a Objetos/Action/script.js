class Person {
  //instanciando dentro da classe atributos padrões para os objetos
  age = 10;
  steps = 0;

  //o construtor é um modelo padrão que os objetos devem seguir.
  constructor(name) {
    this.name = name;
  }

  takeAStep() {
    this.steps = this.steps + 1; //pega os passos atuais do objeto e adiciona + 1;
  }
}

let p1 = new Person("João"); //instanciando um nome ao modelo feito no construtor
let p2 = new Person("Maria");
let p3 = new Person("Edi");

console.log(p1.name, p1.age); //chamando os elementos instanciados em p1
p1.age = 34; //alterando a instancia feita dentro da classe, somente para p1, o restante terá a instancia padrão
console.log(`A Pessoa 1 tem o nome: ${p1.name}, e ${p1.age} anos`);
console.log(`A Pessoa 2 tem o nome: ${p2.name}, e ${p2.age} anos`);
console.log(`A Pessoa 2 tem o nome: ${p3.name}, e ${p3.age} anos`);

p1.takeAStep(); //chamando a função somente para p1
p1.takeAStep();
console.log(`${p1.name} deu ${p1.steps} passos`);

console.log(`${p2.name} deu ${p3.steps} passos`);
