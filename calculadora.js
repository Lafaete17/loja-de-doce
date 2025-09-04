import readline from "readline-sync"

let num1 = parseFloat(readline.question("Digite o primeiro numero"));

let num2 = parseFloat(readline.question("Digite o segundo numero"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log("A soma é ; " + soma);
console.log("A subtracao é ; " + subtracao);
console.log("A multiplicacao é ; " + multiplicacao);
console.log("A divisao é ; " + divisao);