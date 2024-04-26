const clicou = () => console.log('Clicou!');

let buta2 = document.querySelector('.buta2')

/*em event listener, entre parêntes: primeiro o tipo de evento e segundo a função que aquele evento irá executar
(definir sem o parênteses, pois não está executando a função, está apenas mandando a definição dela).
p*/
buta2.addEventListener('click',clicou)

//também é possível criar uma função sem a necessidade de chamar uma.
buta2.addEventListener('click', () => console.log('blablala'))