// Cria uma nova data com o horário atual
let d = new Date();
// Cria uma nova data com o valor específico de "2020-01-01 12:20:12"
let data = new Date("2020-01-01 12:20:12");
// Cria uma nova data a partir do valor negativo de milissegundos desde 01/01/1970
let yearAndMonth = new Date(-1199498419498);

console.log(d); // Imprime a data e hora atuais
console.log(d.toString()); // Imprime a data e hora atuais como uma string legível
console.log(d.toDateString()); // Imprime a data atual como uma string legível (somente data)
console.log(d.toUTCString()); // Imprime a data e hora atuais no formato UTC como uma string
console.log(data); // Imprime a data específica "2020-01-01 12:20:12"
console.log(yearAndMonth.toString()); // Imprime a data representada pelos milissegundos negativos desde 01/01/1970

// Manipulando a data

let dat = new Date(); // Cria uma nova data com o horário atual
let novoValor = dat; // Copia a data atual para uma nova variável

// Imprime o ano completo da data
console.log(novoValor.getFullYear()); // Ano atual
// Imprime o mês da data (0-11), então adicionamos 1 para representar o mês correto
console.log(novoValor.getMonth() + 1); // Mês atual
// Imprime o dia da semana (0-6), onde 0 é domingo e 6 é sábado
console.log(novoValor.getDay()); // Dia da semana atual
// Imprime o dia do mês (1-31)
console.log(novoValor.getDate()); // Dia do mês atual
// Imprime a hora da data (0-23)
console.log(novoValor.getHours()); // Hora atual
// Imprime os minutos da data (0-59)
console.log(novoValor.getMinutes()); // Minutos atuais
// Imprime os segundos da data (0-59)
console.log(novoValor.getSeconds()); // Segundos atuais
// Imprime os milissegundos da data (0-999)
console.log(novoValor.getMilliseconds()); // Milissegundos atuais
// Imprime o número de milissegundos desde 01/01/1970
console.log(novoValor.getTime()); // Milissegundos desde 01/01/1970

// Maneira nova, usando Date.now() para obter o timestamp atual em milissegundos desde 01/01/1970
let dataNew = Date.now();
console.log(dataNew); // Timestamp atual

////

// Manipulação de data
let dataManipulada = new Date(); // Cria uma nova data com o horário atual

// Define o ano da data para 2024
dataManipulada.setFullYear(2024);
console.log(dataManipulada); // Imprime a data com o ano definido para 2024

// Define o mês da data para junho (5, porque janeiro é 0)
dataManipulada.setMonth(5);
console.log(dataManipulada); // Imprime a data com o mês definido para junho

// Define o dia do mês para 29
dataManipulada.setDate(29);
console.log(dataManipulada); // Imprime a data com o dia do mês definido para 29

// Incrementa a data em 400 dias a partir da data atual
dataManipulada.setDate(dataManipulada.getDate() + 400);
console.log(dataManipulada.toString()); // Imprime a data incrementada em 400 dias
