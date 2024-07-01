function calculate() {
    // Pegar os valores dos campos de input e da operação selecionada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    
    // Variável para armazenar o resultado da operação
    let result;
    
    // Realizar a operação baseada na seleção do operador
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Erro: Divisão por zero';
            }
            break;
        default:
            result = 'Operação inválida';
    }
    
    // Mostrar o resultado na página
    document.getElementById('output').textContent = result;

}
let botao = document.getElementById('botao')

 
botao.addEventListener('click', calculate)