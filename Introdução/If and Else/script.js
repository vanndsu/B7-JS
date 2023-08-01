let nome = "mayron";
let idade = 18;

//se nome for igual
if (nome == "kayron") {
  console.log("Queixudinho");
} else console.log("Te falta queixo");

//se idade for maior ou igual
if (idade >= 18) {
  console.log("De MAIOR");
} else console.log("De MENOR");

//se idade for maior ou igual ou idade igual a 17 e nome for igual
if (idade >= 18 || idade == 17 && nome == 'mayron') {
  console.log("De MAIOR...");
} else console.log("De MENOR");

//se idade for diferente
if (idade != 18 ) {
  console.log("NÃO TEM 18...");
} else console.log("TEM EXATAMENTE 18");



/*um igual mais rigoroso
if(novaIdade === 20){
    novaIdade = novaIdade + 15;
    console.log('Resultado:', novaIdade)
}else console.log('Nem entra irmão, o 20 não é do mesmo tipo')*/


//Condicional Dupla (if else)
let novaIdade = 20;

if (novaIdade === 20){
    console.log('Sua idade é 20 inteiro')
}else if( novaIdade == 20){
    console.log('Sua idade é 20 em string')
}else if (idade < 10 )console.log('Sla irmão')