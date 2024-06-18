const alvo = document.getElementById('alvo');
let cont = 0;
let contErros = 0;
let timeoutId;

function comecar() {
    const main = document.getElementById('main');

    main.classList.add('removerMain');

    alvo.classList.add('aparecerAlvo');
    posicaoTop = Math.random() * (window.innerHeight - alvo.offsetHeight);
    posicaoLeft = Math.random() * (window.innerWidth - alvo.offsetWidth);

    alvo.style.top = posicaoTop + 'px'
    alvo.style.left = posicaoLeft + 'px'

    document.getElementById('cont').classList.add('aparecerCont');
    document.getElementById('contErros').classList.add('aparecerCont');
    document.body.classList.add('aparecerCont');
    contErros = -1;
    startTimeout();
}

function mira() {
    posicaoTop = Math.random() * (window.innerHeight - alvo.offsetHeight);
    posicaoLeft = Math.random() * (window.innerWidth - alvo.offsetWidth);

    alvo.style.top = posicaoTop + 'px'
    alvo.style.left = posicaoLeft + 'px',

    cont++;
    document.getElementById('cont').innerHTML = 'Acertos: ' + cont;
    contErros--;

    alvo.style.animation = 'none'; 
    alvo.offsetHeight; 
    alvo.offsetWidth;   
    alvo.style.animation = null;

    startTimeout();

}

function errou() {
    contErros++;
    document.getElementById('contErros').innerHTML = 'Erros:  ' + contErros;
    
    alvo.style.animation = 'none'; 
    alvo.offsetHeight; 
    alvo.offsetWidth; 
    alvo.style.animation = null;

    posicaoTop = Math.random() * (window.innerHeight - alvo.offsetHeight);
    posicaoLeft = Math.random() * (window.innerWidth - alvo.offsetWidth);

    alvo.style.top = posicaoTop + 'px'
    alvo.style.left = posicaoLeft + 'px'
    startTimeout();
}

function aparecerAlvo() {
    alvo.style.animation = 'none'; 
    alvo.offsetHeight; 
    alvo.offsetWidth; 
    alvo.style.animation = null;

    posicaoTop = Math.random() * (window.innerHeight - alvo.offsetHeight);
    posicaoLeft = Math.random() * (window.innerWidth - alvo.offsetWidth);

    alvo.style.top = posicaoTop + 'px'
    alvo.style.left = posicaoLeft + 'px'

    contErros++;
    document.getElementById('contErros').innerHTML = 'Erros:  ' + contErros;

    startTimeout();

}

function startTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(aparecerAlvo, 3000);
}