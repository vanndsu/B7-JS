let pessoa = {
  nome: "Vandim", // Propriedade nome com valor 'Vandim'
  //sobrenome: "Ribeiro", // Propriedade sobrenome comentada
  idade: 23, // Propriedade idade com valor 23
  social: {
    facebook: "Vanderson Ribeiro", // Propriedade facebook com valor 'Vanderson Ribeiro'
    instagram: {
      url: "@vanndsu", // Propriedade url com valor '@vanndsu'
      seguidores: 1000, // Propriedade seguidores com valor 1000
    },
  },
  // Método que retorna o nome completo
  nomeCompleto: () => `${pessoa.nome} ${pessoa.sobrenome}`,
};

console.log(pessoa.nomeCompleto()); // Chama o método nomeCompleto e exibe no console

// Desestruturação do objeto pessoa para obter as propriedades especificadas
let {
  nome, // Atribui o valor da propriedade 'nome' da pessoa à variável nome
  sobrenome, // Atribui o valor da propriedade 'sobrenome' da pessoa à variável sobrenome (não definida no objeto)
  idade, // Atribui o valor da propriedade 'idade' da pessoa à variável idade
  social: {
    instagram: { url: instagram }, // Atribui o valor da propriedade 'url' de 'instagram' à variável instagram
  },
} = pessoa;

console.log(nome, sobrenome, idade, instagram); // Exibe as variáveis no console

// Função que retorna o nome completo e a url do Instagram
function pegaNomeCompleto({
  nome, // Parâmetro nome, obtido do objeto passado
  sobrenome = "Silva", // Parâmetro sobrenome, com valor padrão 'Silva' (só será usado caso não exista uma variável com o mesmo nome dentro do objeto)
  social: {
    instagram: { url: instagram }, // Parâmetro instagram, obtido da propriedade 'url' de 'instagram'
  },
}) {
  return `${nome} ${sobrenome}, ${instagram}`; // Retorna o nome completo e a url do Instagram
}

console.log(pegaNomeCompleto(pessoa)); // Chama a função pegaNomeCompleto com o objeto pessoa e exibe o resultado no console
