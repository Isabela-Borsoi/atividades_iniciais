let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let ano = document.getElementById('ano').value

    fetch('atividade.php?a=' + ano ).then(function(resposta) {
        return resposta.text();
    }).then(function(texto) {
        document.getElementById('mensagem').innerText = texto
    })
})