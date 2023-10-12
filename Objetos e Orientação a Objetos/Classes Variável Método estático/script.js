class Person{
    static hands = 2; //faz referência somente a classe pessoa como um todo.
    age = 10;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`Olá eu sou${this.name} e tenho ${Person.hands} mãos`)
    }
    static sayHello(){
        console.log('Olá!')
    }
}

let p1 = new Person("Luiz");
p1.sayHi();
Person.hands = 3; //forma de alterar(porém não se deve alterar.)
p1.sayHi();
Person.sayHello();