let botao = document.getElementById('botao')

 
botao.addEventListener('click', function() {
  document.body.style.backgroundColor= trocarCor()
})

function trocarCor () {
    let cor= "#"
    for (let i=0; i<6; i++) {
        cor+= Math.floor(Math.random() * 16).toString(16)
    } 
    return cor
}