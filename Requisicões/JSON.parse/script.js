// Converte a string JSON em um objeto JavaScript
let pessoa = JSON.parse(
    '{"nome": "Vandim", "idade": 90,"estetica":{"altura": 1.80, "peso": 83}}'
  );
  
  // Acessa a propriedade 'peso' dentro do objeto 'estetica' do objeto 'pessoa'
  console.log(pessoa.estetica.peso); // Saída: 83
  