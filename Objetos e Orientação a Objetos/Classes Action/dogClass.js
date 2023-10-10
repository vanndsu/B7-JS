class Cachorro {
  latido = 0;
  anda = 0;
  adotado = false;

  constructor(nome, cor) {
    this.nome = nome;
    this.cor = cor;
  }

  latir() {
    this.latido++;
  }
  andar() {
    this.anda++;
  }
  adotar(adotado) {
    if (typeof adotado == "string") {
      this.adotado = adotado;
    } else {
      console.log("Digite uma opção válida.");
    }
  }
}

let c1 = new Cachorro("Tobby", "Caramelo");
let c2 = new Cachorro("Ralf", "Branco");
let c3 = new Cachorro("Bob", "Preto");

console.log(c1.nome, c1.cor);
c1.latido = 2;
console.log(
  `O cachorro: ${c1.nome}, de cor ${c1.cor} latiu ${c1.latido} vezes e andou ${c1.anda} vezes. É adotado? ${c1.adotado}`
);

c2.latir();
c2.latir();
c2.latir();
console.log(
  `O cachorro: ${c2.nome}, de cor ${c2.cor} latiu ${c2.latido} vezes e andou ${c2.anda} vezes. É adotado? ${c2.adotado}`
);

c3.andar();
c3.andar();
c3.andar();
c3.andar();
c3.andar();
c3.andar();
c3.andar();
c3.andar();
c3.andar();
c3.adotar('sim');
console.log(
  `O cachorro: ${c3.nome}, de cor ${c3.cor} latiu ${c3.latido} vezes e andou ${c3.anda} vezes. É adotado? ${c3.adotado}`
);
