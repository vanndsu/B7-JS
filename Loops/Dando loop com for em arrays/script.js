/*let cores = ['vermelho','azul','preto','vermelho','amarelo']
cores.push('Carvão')*/

let corzinhas = [

  { nome: "amarelo", qtd: 10 },
  { nome: "vermelho", qtd: 16 },
  { nome: "preto", qtd: 13 },

];


/*for (let n = 1;  n < cores.length+1; n++){
    console.log(`${n}ª cor: ${cores[n-1]}`)
}*/

//mesmo efeito do laço de cima.

for(let i in corzinhas){ //i se torna a chave(posição) para acessar valores dentro do array
    console.log(corzinhas[i].nome.toUpperCase())//função para deixar a string toda maiúscula.
}

for(let cor of corzinhas){//cor é o próprio valor dentro do array
    console.log(`Cor: ${cor.nome} - Quantiade: ${cor.qtd}`)
}
