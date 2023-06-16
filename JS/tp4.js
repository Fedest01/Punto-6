function encriptar() {
    // variables que obtengo del HTML
    let n = document.getElementById("num").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let mensaje = document.getElementById("mensaje");
    // numeros que obtengo del usuario y los separo por digito
    let nUno = (+n.slice(2, 3) + 7) % 10;
    let nDos = (+n.slice(3, 4) + 7) % 10;
    let nTres = (+n.slice(0, 1) + 7) % 10;
    let nCuatro = (+n.slice(1, 2) + 7) % 10;
    // numero final que obtengo de unir digito por digito
    let numCifrado = String(nUno) + String(nDos) + String(nTres) + String(nCuatro);

    // condicional y resultados
    if (n >= 1 && n <= 9999) {
        mensaje.textContent = numCifrado;
        tituloMensaje.textContent = "Se encripto el numero ingresado";
    } else {
        alert("Error.");
    }
}

function desencriptar() {
    // variables que obtengo del HTML
    let n = document.getElementById("num").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let mensaje = document.getElementById("mensaje");
    // numeros que obtengo del usuario y los separo por digito
    let nUno = (+n.slice(2, 3) + 3) % 10;
    let nDos = (+n.slice(3, 4) + 3) % 10;
    let nTres = (+n.slice(0, 1) + 3) % 10;
    let nCuatro = (+n.slice(1, 2) + 3) % 10;
    // numero final que obtengo de unir digito por digito
    let numDescifrado = String(nUno) + String(nDos) + String(nTres) + String(nCuatro);

    // condicional y resultados
    if (n >= 1 && n <= 9999) {
        mensaje.textContent = numDescifrado;
        tituloMensaje.textContent = "Se desencripto el numero ingresado";
    } else {
        alert("Error.");
    }
}