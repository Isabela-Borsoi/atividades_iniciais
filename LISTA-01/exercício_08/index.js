function countWords() {
    // Obter o texto do textarea
    let text = document.getElementById('textArea').value.trim();
    
    // Contar as palavras usando expressão regular para dividir o texto em palavras
    // (considerando palavras como sequências de caracteres separadas por espaços)
    let wordCount = text.split(/\s+/).filter(word => word !== '').length;
    
    // Exibir o resultado na página
    document.getElementById('count').textContent = wordCount;
}
