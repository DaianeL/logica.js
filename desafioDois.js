// 1. Criar uma função que exibe "Olá, mundo!" no console.

function saudacao() {
  console.log("Olá Mundo!");
}

saudacao();

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// Para criar a função iremos iniciar com -> function em seguida criaremos o nome da função, o mais próximo e entendível possível de acordo com o solicitado, depois iremos inserir as variáveis dentro do espaço destinado a parâmetros -> estes chamados de argumentos.

function recebeNome(nome) {
  console.log(`Olá, ${nome}`);
}
recebeNome(`Daiane`);

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function recebeNumero(numero) {
  console.log(numero * 2);
}
recebeNumero(11);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(num1, num2, num3) {
  let soma = num1 + num2 + num3;
  let media = soma / 3;
  console.log(`A média entre os números é: ${media}`);
}

calcularMedia(7, 14, 21);

// 5 .Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
//function encontrarMaior(a, b) {
   // return a > b ? a : b;
  //}
  
 // let maiorNumero = encontrarMaior(15, 9);
  //console.log(maiorNumero);

// 6 .Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function numMultiplicado(numero) {
  let num = numero * numero;
  console.log(`O resultado da muntilplicação é: ${num}`);
}
numMultiplicado(2);
