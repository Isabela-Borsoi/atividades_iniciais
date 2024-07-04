function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    // Formatar os números para dois dígitos (ex: 03, 12)
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    
    // Atualizar o texto do relógio na página
    document.getElementById('clockDisplay').textContent = `${hours}:${minutes}:${seconds}`;
    
    
}

function formatTime(time) {
    // Função auxiliar para formatar o tempo com dois dígitos
    return time < 10 ? `0${time}` : time;
}

// Iniciar o relógio quando a página carrega
updateClock();
// Chamar a função novamente a cada segundo
    setInterval(updateClock, 1000);