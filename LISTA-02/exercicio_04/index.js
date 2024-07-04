
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    var tbodyRef = document.getElementById('tabela').getElementsByTagName('tbody')[0];

// Insert a row at the end of table
var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell = newRow.insertCell();
let newCell2 = newRow.insertCell();

// Append a text node to the cell
var newText = document.createTextNode(nome);
var newText2 = document.createTextNode(email);
newCell.appendChild(newText);
newCell2.appendChild(newText2);
})