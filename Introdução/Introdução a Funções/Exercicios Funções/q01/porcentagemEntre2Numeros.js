//exemplo 1
function calcPorcentagem1(x,y){

    return (y/100) * x;
}

let x = 40;
let y = 25;
let calcPorc = calcPorcentagem1(x,y)

console.log(`${y}% de ${x} é: ${calcPorc}`)


//exemplo 2
function calcPorcentagem2(n1,n2){

    return (n2/n1) * 100;
}

let v = 40;
let z = 10;
let calcPorce = calcPorcentagem2(v,z);

console.log(`${calcPorce}% de ${v} é: ${z}`);