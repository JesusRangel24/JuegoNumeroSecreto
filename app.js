let numeroSecreto = 1;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

//asignarTextoElemento('h1','El juego del numero secreto');
//asignarTextoElemento('p','Indica un numero del 1 al 10 por favor:');

//function verificarIntento() {
//alert('Clic desde el botón');
//}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se han sorteado todos los numeros posibles');
    } else {

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if (numeroDeUsuario === numeroSecreto) {
asignarTextoElemento('p',`Felicidades, acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
if (numeroDeUsuario > numeroSecreto) {
asignarTextoElemento('p','El numero secreto es menor');
} else {
asignarTextoElemento('p','El numero secreto es mayor');
}
intentos++;
limpiarCaja();
}
return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} por favor:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
// limpiar los datos
limpiarCaja();
//mensajes iniciales
//asignarTextoElemento('h1','El juego del numero secreto');
//asignarTextoElemento('p','Indica un numero del 1 al 10 por favor:');
// generar un nuevo numero
//numeroSecreto = generaNumeroSecreto();
//reiniciar el contador de intentos
//intentos = 1;
condicionesIniciales();
//deshabilitar el boton de nuevo
document.querySelector('#reiniciar').setAttribute('disabled','true');
} 
condicionesIniciales();

