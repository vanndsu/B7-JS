//criando a classe(objetos criados serão intanciados usando essa classe)
class Person {
  //instanciando dentro da classe atributos padrões para os objetos
  age = 10;

  //o construtor é um modelo padrão que os objetos devem seguir.
  constructor(name) {
    this.name = name;
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
