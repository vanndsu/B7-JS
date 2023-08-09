function maiorIdade(idade) {
  if (idade >= 18) {
    return true;
  } else return false;
}

//console.log("Ele é maior de idade?", maiorIdade(17));

let idade = 17;
let verifica = maiorIdade(idade);

if (verifica) {
  console.log("É MAIOR DE IDADE!");
} else console.log("NÃO É MAIOR DE IDADE!");
