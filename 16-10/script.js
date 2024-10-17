const meuParagrafro = document.getElementById('texto')


const meuBotao = document.getElementById('meuBotao')


const meuBotao2 = document.getElementById('meuBotao2')


const meuBotao3 = document.getElementById('meuBotao3')


const meuBotao4 = document.getElementById('meuBotao4')

const imagem = document.getElementById('imagem')

function alterarTexto(){}

meuBotao.addEventListener('click', () => {
    if (!alterarTexto) {
        meuParagrafro.textContent = 'mudei essa bomba';
        alterarTexto = true;
    } else {
        meuParagrafro.textContent = 'Clica ai';
        alterarTexto = false;
    }
});

function alterarCor(){
    meuParagrafro.style.color ='red'
}

meuBotao2.addEventListener('click', alterarCor);

function alterarCorDeFundo(){
    meuBotao3.style.backgroundColor ='black'
}

meuBotao3.addEventListener('dblclick', alterarCorDeFundo);

function imagemVisivel (){}

meuBotao4.addEventListener('click', () => {
    if (!imagemVisivel) {
        imagem.style.display = 'block';
        meuBotao4.textContent = 'Esconder Imagem';
        imagemVisivel = true;
    } else {
        imagem.style.display = 'none'; 
        meuBotao4.textContent = 'Mostrar Imagem'; 
        imagemVisivel = false;
    }
})
