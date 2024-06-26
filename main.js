const alvo = document.getElementById('alvo');
let cont = 0;
let contErros = -1;
let timeoutId;

function comecar() {
    const main = document.getElementById('main');

    main.classList.add('removerMain');

    alvo.classList.add('aparecerAlvo');

    mudandoAlvoDeLugar()

    document.getElementById('cont').classList.add('aparecerCont');
    document.getElementById('contErros').classList.add('aparecerCont');
    document.body.classList.add('aparecerCont');
    startTimeout();
}

function mira() {

    mudandoAlvoDeLugar()

    cont++;
    document.getElementById('cont').innerHTML = 'Acertos: ' + cont;
    contErros--;

    resetarAnimacao()

    startTimeout();

}

function errou() {
    contErros++;
    document.getElementById('contErros').innerHTML = 'Erros:  ' + contErros;
    
    resetarAnimacao()

    mudandoAlvoDeLugar()

    startTimeout();
}

function aparecerAlvo() {

    resetarAnimacao()

    mudandoAlvoDeLugar()

    contErros++;
    document.getElementById('contErros').innerHTML = 'Erros:  ' + contErros;

    startTimeout();

}

function startTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(aparecerAlvo, 3000);
}

function resetarAnimacao() {
    alvo.style.animation = 'none'; 
    alvo.offsetHeight; 
    alvo.offsetWidth; 
    alvo.style.animation = null;
}

function mudandoAlvoDeLugar() {
    posicaoTop = Math.random() * (window.innerHeight - alvo.offsetHeight);
    posicaoLeft = Math.random() * (window.innerWidth - alvo.offsetWidth);

    alvo.style.top = posicaoTop + 'px'
    alvo.style.left = posicaoLeft + 'px'
}