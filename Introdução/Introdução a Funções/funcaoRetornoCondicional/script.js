

//exemplo sem return
function maiorIdade(idade){

    if(idade<18 && idade > 0){
        console.log('Dimenó');
    }else if(idade==18){
        console.log('Dimaior');
    }else if(idade>18){
        console.log('Tá véi');
    }else
        console.log('Invalido')
}
maiorIdade(0);


//mesma ideia, mas usando o return.
function idadeMaior(idade){
    if(idade >= 18){
        return true;
    }else
        return false;
}

let idade = 12;
let verificaIdade = idadeMaior(idade);

//se for verdadeiro(true) ele executa a primeira linha, caso contrário, cai no else.
if(verificaIdade){
    console.log('De maior');
}else
    console.log('Dimenó');


