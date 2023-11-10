
const menorValor = 1;
const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const maiorValor = 1000;
const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;


const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
   return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);