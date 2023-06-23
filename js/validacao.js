function verificaChute(chute) {
    const numero = +chute;
    
    if (chuteValido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Você precisa falar um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2><i class="fa-sharp fa-regular fa-star"></i> Parabéns, você acertou!
            <i class="fa-sharp fa-regular fa-star"></i></h2>
    
            <h3>O número secreto era ${numeroSecreto}</h3>
    
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente<button/>`;

    }
    else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
                <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`;     
    }
    else {
        elementoChute.innerHTML += `
                <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`;       
    }

    numChance.innerText = parseInt(numChance.innerText) - 1;

    if(parseInt(numChance.innerText) == 0) {
        document.body.style.background = 'black';
        document.body.innerHTML = `<h2>Fim da linha</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente<button/>`;
    }
    
}

function fimJogo(numero) {
    return numero === "game";
}

function chuteValido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function verificaSeChuteIgualNumeroSorteado(numero) {
    return numero === numeroSecreto;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});