
let botao = document.getElementById('botao')
let ano=2024
botao.addEventListener('click', function() {
    let nascimento = document.getElementById('nascimento').value
    
    document.getElementById('mensagem').innerText= ano-nascimento
    
})