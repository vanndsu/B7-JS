class Person{
    age = 0;
    
    constructor(name){
        this.name = name;
    }
}

function createPerson(name,age){
    let p = new Person(name)
    p.age = age;

    return p;
}

let p1 = createPerson('Vandim',90)

console.log(`Olá! Me chamo ${p1.name} e tenho ${p1.age} anos`)