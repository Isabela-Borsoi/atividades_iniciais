let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let idade = document.getElementById('idade').value
    if (idade >= 18){
        document.getElementById('mensagem').innerText= 'é maior de idade'
    }else{
        document.getElementById('mensagem').innerText= 'é menor de idade'
    }
   
    
})