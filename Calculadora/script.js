function updateDisplay(number) {
    const display = document.getElementById('display');
    if (display.textContent == "0") {
        display.textContent = number // Reemplaza el 0 inicial
    } else {
        display.textContent += number; // Agrega el número al final
    }
}
function eliminar(){
    const display = document.getElementById('display')
    display.textContent = 0
}
