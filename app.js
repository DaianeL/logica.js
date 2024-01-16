// 1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
// 2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarChute() {
  console.log("O botão foi clicado!");
}
//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

//function alerta() {
//  alert("Eu amo JS");
//}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: .

function exibirMensagem() {
  // Pede ao usuário para inserir o nome da cidade
  let cidade = prompt(`Nome de uma cidade do Brasil`);
  // Verifica se o usuário inseriu algum valor
  if (cidade !== null) {
    // Exibe um alerta concatenando a resposta com o texto desejado
    alert(`Estive em ${cidade} e lembrei de você`);
  } else {
    // Caso o usuário não insira um valor válido
    alert("Você não inseriu o nome da cidade. Tente novamente.");
  }
}
//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function botaoSoma() {
  let valorUm = prompt("Insira o nº 1:");
  let um = parseFloat(valorUm);

  let valorDois = prompt("Insira o nº 2:");
  dois = parseFloat(valorDois);

  let resultado = valorUm + valorDois;
  alert(
    `O resultado entre a soma de ${valorUm} + ${valorDois} é = ${resultado}`
  );
}
