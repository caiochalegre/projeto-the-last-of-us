const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoSelecionado(botao);

        desativarImagemAtiva();

        selecionarImagemAtiva(indice);
    })
})

function selecionarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
