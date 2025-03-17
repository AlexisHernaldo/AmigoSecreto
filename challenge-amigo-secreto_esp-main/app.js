// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nombreAgregado = document.getElementById ("amigo").value.trim();
    if (nombreAgregado == '') {
        alert('Por favor, Escriba un nombre');
        limpiarCaja();
        return;
    } else if (listaAmigos.includes(nombreAgregado)) {
        alert('Este nombre ya esta registrado');
        limpiarCaja();
        return;
    } else {
        listaAmigos.push(nombreAgregado);       
        asignarTextoElementoById('listaAmigos',listaAmigos);
        limpiarCaja();
        console.log(listaAmigos);
    }
}

function sortearAmigo () {
    if (listaAmigos.length === 0) {
        alert('Por favor, Introdusca un nombre');
    } else {
        let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoSeleccionado = listaAmigos[numeroAleatorio];
        asignarTextoElementoById("resultado",`El amigo secreto es "${amigoSeleccionado}". Dale un regalo`);
    }
}

function limpiarCaja () {
    document.getElementById ("amigo").value = ' ';
}

function asignarTextoElementoById (elementoById, texto) {
    let elementoHTML = document.getElementById(elementoById);
    elementoHTML.innerHTML = texto;
}




