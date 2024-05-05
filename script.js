const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const respostaDiv = document.getElementById('resposta');

simButton.addEventListener('click', function() {
    exibirResposta('Finalmente!', 'feliz.png');
});

naoButton.addEventListener('click', function() {
    exibirResposta('É, acabou a amizade. Adeus.', 'triste.png');
});

function exibirResposta(mensagem, imagem) {
    respostaDiv.innerHTML = `
        <p>${mensagem}</p>
        <img src="${imagem}">
    `;
    respostaDiv.style.display = 'block';
}
