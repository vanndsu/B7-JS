let fruits = ['Banana','Maça', 'Goiaba', 'Pera'];

fruits.sort();//ordena o array em ordem alfabética
console.log(fruits)

fruits.reverse()//inverte a ordem do array
console.log(fruits);

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Chevrolet', year: 2023},
    {brand: 'Volkswagen', year: 2021}
]

//cars[0].year = 2024;

//ordendando um vetor de objetos
cars.sort((a,b) =>{
    if(a.year < b.year){
        return -1;
    }else if(a.year > b.year){
        return 1;
    }else
        return 0;
});

//cars.sort((a,b) => a.year - b.year) //método otimizado

console.log(cars)

cars.reverse()
console.log(cars);
