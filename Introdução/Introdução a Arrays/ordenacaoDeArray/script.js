let carros = [
  { brand: "BMW", year: 1999 },
  { brand: "Fiat", year: 1987 },
  { brand: "Ferrari", year: 1990 },
  { brand: "Volks", year: 1991 },
];

/*O primeiro if verifica se o ano de fabricação do carro a é maior que o ano de fabricação do carro b.
Se for, retorna 1, indicando que o carro a deve ser classificado depois do carro b.

O else if verifica se o ano de fabricação do carro a é menor que o ano de fabricação do carro b.
Se for, retorna -1, indicando que o carro a deve ser classificado antes do carro b.

O bloco else é alcançado quando os anos de fabricação de a e b são iguais, retornando 0, o que significa que eles devem permanecer na mesma posição relativa.
Portanto, o código classificará o array carros em ordem crescente com base no ano de fabricação dos carros.
Isso significa que o carro mais antigo será o primeiro no array, e o carro mais recente será o último.*/

carros.sort((a, b) => {
  if (a.year > b.year) {
    return -1;
  } else if (a.year < b.year) {
    return 1;
  } else return 0;
});

console.log(carros);

//forma simplificada, ordem crescente. Quando há um resultado positivo o comparador 'a', avança no array.
//sendo assim, o maior ficará na última posição.
carros.sort((a, b) => a.year - b.year);
console.log(carros);
