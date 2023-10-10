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
  setAge(newAge){
    if(typeof newAge == 'number'){
        this.age = newAge;
    }
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

p3.takeAStep()//chamando a função que atribui um passo ao objeto
p3.takeAStep()//incrementando mais um passo
console.log(`${p3.name} deu ${p3.steps} passos`)


p2.setAge(13)//setando um número na função para ser a nova idade de p2
console.log(`Nova idade de ${p2.name}: ${p2.age} anos`)