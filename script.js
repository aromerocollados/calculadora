
function limpiarPantalla() {
    document.getElementById('pantalla').value = 0;
}

function borrarEntrada() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = 0;
}

function añadirCaracter(caracter) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += caracter;
}

function calcularResultado() {
    const pantalla = document.getElementById('pantalla');
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = 'Error';
    }
}
