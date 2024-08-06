let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let base = document.getElementById('base').value
    let altura = document.getElementById('altura').value

    fetch('atividade.php?a=' + base + '&b=' + altura).then(function(resposta) {
        return resposta.text();
    }).then(function(texto) {
        document.getElementById('mensagem').innerText = texto
    })
})