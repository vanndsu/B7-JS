function calcularImovel(metragem,quartos){

    m2 = 3000

    switch(quartos){
        case 1: return metragem * (m2 * 1.0);
            case 2: return metragem * (m2 * 1.2);
                case 3: return metragem * (m2 * 1.5);
    }

    
}

var met = 123;
let quartos = 1;
var preco = calcularImovel(met,quartos);

console.log(`A cas custa: ${preco}`);