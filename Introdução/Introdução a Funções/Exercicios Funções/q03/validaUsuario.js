function validaUsuario(usuario,senha){

    if(usuario == 'Vanderson' && senha == '123'){
        return true
    }else
        return false

}

let usuario = 'Vanderson'
let senha = '123'

if(validaUsuario(usuario,senha)){
    console.log('ACESSO AUTORIZADO!');
}else
    console.log('ACESSO NEGADO!');