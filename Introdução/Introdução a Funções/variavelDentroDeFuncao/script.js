count = -2; //variável de escolpo global

const add = () => count++; //função que incrementa uma variável(dará prioridade as de escolpo global)

add();
add();
add();

console.log(add());