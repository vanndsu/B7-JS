function porcentagem(x, y) {
  return (y / x) * 100;
}

let x = 40;
let y = 10;
let prct = porcentagem(x, y);

console.log(`${prct}% DE ${x} É ${y}`);
