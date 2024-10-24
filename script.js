document.getElementById('startButton').addEventListener('click', function() {
    let letrasConcatenadas = '';
    
    while (true) {
        let letra = prompt("Introduce una letra, presiona 'Cancelar' para terminar:");
        
        if (letra === null) {
            break;
        }
        
        if (letra.length !== 1) {
            alert("Por favor, introduce solo una letra.");
            continue;
        }
        
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]$/.test(letra)) {
            alert("Solo se pueden introducir letras.");
            continue;
        }
        
        letrasConcatenadas += letra;
    }

    document.getElementById('result').textContent = "Las letras que has introducido: " + letrasConcatenadas;
});
