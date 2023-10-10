class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
  sayHi(){
    console.log(`${this.name} diz olá!`)
  }
}

class Student extends Person {//extends dá propriedade de herdar características da classe à direita.
  _grade = 0;

  constructor(name, classroom) {//é necessário colocar propriedades do construtor 'pai' ao instanciar outras caracteristicas no construtor 'filho'.
    super(name);//super pega a caracteristica criada no construtor que foi herdado.
    this.classroom = classroom;
  }

  get grade() {
    return this._grade;//retorna o valor que está na variável _grade;
  }
  set grade(num) {
    this._grade = num; //seta um valor para a variável grade.
  }
  sayHello(){
    super.sayHi();//chamando uma função da classe 'pai' usando o super.
  }
 
}

let p1 = new Student("Alberto", "Sala A");
p1.name = "Alberto";
p1.grade = 10;
p1.age = 3; //chamando normalmente uma caracteristica que até então foi criada somente na classe pai.
console.log(
  `O aluno ${p1.name}, de idade ${p1.age} da sala ${p1.classroom} tirou a nota ${p1.grade}`
);
p1.sayHi(); //chamando normalmente uma função que até então foi criada somente na classe pai.
p1.sayHello();//chamando a função que está herdando outra função da classe pai.
