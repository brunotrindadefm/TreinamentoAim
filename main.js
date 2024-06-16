const alvo = document.getElementById('alvo');
let cont = 0;
let contErros = 0;
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
    alvo.style.left = posicaoLeft + 'px'

    cont++;
    document.getElementById('cont').innerHTML = 'Acertos: ' + cont;
    contErros--;

}

function errou() {
    contErros++;
    document.getElementById('contErros').innerHTML = 'Erros:  ' + contErros;
}