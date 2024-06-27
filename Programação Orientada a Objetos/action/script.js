class Person {
  age = 0;

  //variável para armazenar passos.
  steps = 0;

  constructor(nome, peso) {
    this.name = nome;
    this.weight = peso;
  }

  //ação que incrementa o valor dos passos.
  toWalk() {
    this.steps++;
  }
  setAge(newAge) {

    if(typeof newAge == 'number'){
        this.age = newAge;
    }else{        
        console.log("Idade não válida!");
    }
        
    
  }
}

let p1 = new Person("Capote", 110.0);
let p2 = new Person("Joffrey", 40.0);
let p3 = new Person("Vitu", 70.0);

p1.setAge('8');
console.log(
  `O ${p1.name} tem ${p1.age} anos e pesa ${p1.weight} Kg , o mesmo deu ${p1.steps} passos`
);

p2.age = 26;

p2.weight = 65;
console.log(
  `O ${p2.name} tem ${p2.age} anos e pesa ${p2.weight} Kg , o mesmo deu ${p2.steps} passos`
);

p3.age = 26;
//chamando a ação andar.
p3.toWalk();
console.log(
  `O ${p3.name} tem ${p3.age} anos e pesa ${p3.weight} Kg, o mesmo deu ${p3.steps} passos`
);
