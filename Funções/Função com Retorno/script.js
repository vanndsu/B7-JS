function retorna() {
  (a = 10), (b = 3);

  return a + b;
}
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Vandim", "Ribeiro"));
console.log(retorna());
