//intrudução
/*
function apertou(){
    console.log('Apertou!')
}
function segurou(){
    console.log('Segurou!')
}
function soltou(){
    console.log('Soltou!')
}
//forma de como chamar usando o evento usando o JS.
document.addEventListener('keyup',()=>{
    apertou();
    segurou();
    soltou();
})*/

function soltou(Event) {
  console.log(Event.code);
  console.log(Event.key); //key é mais simplório, o code mais detalhado.

  console.log("A tecla control tava pressionada?" + Event.ctrlKey);
  console.log("A tecla shift tava pressionada?" + Event.shiftKey);
  console.log("A tecla alt tava pressionada?" + Event.altKey);
}
const input = document.querySelector("input");
input.addEventListener("keyup", soltou);
