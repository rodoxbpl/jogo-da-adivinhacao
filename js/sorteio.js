const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
const numChance = document.getElementById('numero-tentativas');
numChance.innerText = 10;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorValor;
