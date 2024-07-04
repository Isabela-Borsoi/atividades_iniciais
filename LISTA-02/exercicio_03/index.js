
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    document.getElementById('celula').innerText=nome
    document.getElementById('celula02').innerText=email
})