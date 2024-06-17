const alvo = document.getElementById('alvo');
let cont = 0;
let contErros = 0;
let tempo = 2900;

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

    tempo = 2900;

}

function errou() {
    contErros++;
    document.getElementById('contErros').innerHTML = 'Erros:  ' + contErros;
}

function aparecerAlvo() {
    alvo.style.animation = 'none'; 
    alvo.offsetHeight; 
    alvo.offsetWidth; 
    alvo.style.animation = null;
}

function mudarAlvo () {
    posicaoTop = Math.random() * (window.innerHeight - alvo.offsetHeight);
    posicaoLeft = Math.random() * (window.innerWidth - alvo.offsetWidth);

    alvo.style.top = posicaoTop + 'px'
    alvo.style.left = posicaoLeft + 'px'

}

setInterval(aparecerAlvo,tempo);
setInterval(mudarAlvo,tempo);   


