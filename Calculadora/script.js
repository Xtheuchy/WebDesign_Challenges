let operando1 = null;
let operando2 = null;
let operacionActual = null;
let reiniciarPantalla = false;
display.textContent = 0;
function updateDisplay(valor) {
    const display = document.getElementById('display');

    if (reiniciarPantalla) {
        display.textContent = valor;
        reiniciarPantalla = false;
    } else {
        // Si el display solo tiene un 0, reemplazarlo
        if (display.textContent === "0") {
            display.textContent = valor;
        } else {
            display.textContent += valor;
        }
    }
}

function eliminar() {
    const display = document.getElementById('display');
    display.textContent = "0";
    operando1 = null;
    operando2 = null;
    operacionActual = null;
    reiniciarPantalla = false;
}

function seleccionarOperacion(op) {
    const display = document.getElementById('display');
    operando1 = parseFloat(display.textContent);
    operacionActual = op;
    display.textContent += op; // Mostrar la operación en el mismo display
    reiniciarPantalla = false;
}

function calcularResultado() {
    const display = document.getElementById('display');

    // Dividir el contenido del display en base a la operación
    let partes;
    switch (operacionActual) {
        case "+":
            partes = display.textContent.split("+");
            break;
        case "-":
            partes = display.textContent.split("-");
            break;
        case "x":
            partes = display.textContent.split("x");
            break;
        case "÷":
            partes = display.textContent.split("÷");
            break;
    }

    if (!partes || partes.length < 2) return;

    operando1 = parseFloat(partes[0]);
    operando2 = parseFloat(partes[1]);

    let resultado;
    switch (operacionActual) {
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operando1 - operando2;
            break;
        case "x":
            resultado = operando1 * operando2;
            break;
        case "÷":
            resultado = operando2 !== 0 ? operando1 / operando2 : "Error";
            break;
    }

    display.textContent = resultado;
    operando1 = resultado;
    operacionActual = null;
    reiniciarPantalla = true;
}
