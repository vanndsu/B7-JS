let profession = "police";

console.log(`PARABÉNS, ${profession}`)
switch (profession) {
  case "police":
    console.log("FARDA TOP!");
    break;
  case "firefighter":
    console.log("FARDA LEGAL!");
    break;
  case "sailor":
    console.log("FARDA OK!");
    break;
  default:
    console.log("INSIRA UMA OPÇÃO VÁLIDA");
}
