function validar(usuario, senha) {
  let user = "vann";
  let psw = 123;

  if (usuario == user && senha == psw) {
    return true;
  } else return false;
}

let usuario = "vann3";
let senha = 123;
let valida = validar(usuario, senha);
if (valida) {
  console.log("ACESSO CONCEDIDO.");
} else console.log("ACESSO NEGADO.");
