let cores = [
    {nome: 'Vermelho', qtd: 10},
    {nome: 'Azul', qtd: 15},
    {nome: 'Branco', qtd: 11},
]



/*for(let i = 0; i < cores.length; i++){
    console.log(`Cor ${cores[i]} está na posição ${i} do array`);
}*/

//i é chave do array (0,1,2,3,4 e etc...)
/*for(let i in cores){
    cores[i].nome = cores[i].nome.toUpperCase();
    console.log(`Cor ${cores[i].nome} está na posição ${i} do array`);
}*/

//acessa o próprio item do array
for(let cor of cores){
    cor.nome = cor.nome.toUpperCase();
    console.log(cor.nome, cor.qtd);

}