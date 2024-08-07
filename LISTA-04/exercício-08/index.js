let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let temperatura = document.getElementById('temperatura').value

    fetch('atividade.php?a=' + temperatura ).then(function(resposta) {
        return resposta.text();
    }).then(function(texto) {
        document.getElementById('mensagem').innerText = texto
    })
})