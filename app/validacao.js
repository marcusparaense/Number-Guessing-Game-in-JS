function verificarSeOChutePossuiUmValorValido (chute) {
    const numero = +chute;
    
    if(chuteForInvalido(numero)) {
        console.log('valor invalido. Fale um numero válido.');
        elementoChute.innerHTML += `<div>valor invalido. Fale um numero válido.</div>`
    } else if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`valor invalido: numero secreto precisa estar entre ${menorValor} e ${maiorValor}`);
        elementoChute.innerHTML += `<div>valor invalido: Fale numero entre ${menorValor} e ${maiorValor}</div>`;
    } else if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML +=
        `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    } else {
        elementoChute.innerHTML +=
        `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})