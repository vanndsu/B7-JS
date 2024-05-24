const defaultUser = {
  nome: "Padrão",
  email: "default@gmail.com",
  level:1
};

let user1 = {
    //... herda as caracterisiticas do elemento indicado
    ...defaultUser,
    nome: "Vandim",
}

//o nome foi sopreposto por outro, o e-mail e o level foram herdados do default
console.log(user1.nome,user1.email,user1.level)

