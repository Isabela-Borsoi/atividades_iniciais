
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
     if (document.getElementById('codigo').value) {
            editar()
        } else {
            criar()
        }

    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('codigo').value = ""
})

function criar (){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    var tbodyRef = document.getElementById('tabela').getElementsByTagName('tbody')[0];

// Insert a row at the end of table
var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell = newRow.insertCell();
let newCell2 = newRow.insertCell();
let newCell3 = newRow.insertCell();

// Append a text node to the cell
var newText = document.createTextNode(nome);
var newText2 = document.createTextNode(email);
let botao = document.createElement("button")
botao.innerHTML = "editar"
botao.addEventListener("click",function(){
    let linha = this.parentNode.parentNode
    document.getElementById('nome').value = linha.cells[0].innerHTML
    document.getElementById('email').value = linha.cells[1].innerHTML
    document.getElementById('codigo').value = linha.rowIndex

})
newCell.appendChild(newText);
newCell2.appendChild(newText2);
newCell3.appendChild(botao);
}

function editar (){
    let linha = document.getElementById('tabela').rows[document.getElementById('codigo').value]
    linha.cells[0].innerHTML = document.getElementById('nome').value
    linha.cells[1].innerHTML = document.getElementById('email').value

}