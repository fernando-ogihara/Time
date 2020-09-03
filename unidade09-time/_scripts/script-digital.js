var intervalo, agora;

function setDoisDigitos(tempo) {
    if (tempo < 10) {
        return "0"+ tempo;
    } else {
        return tempo;
    }
}

function mostrarHora() {
    agora = new Date();
    var hora     = setDoisDigitos(agora.getHours());
    var minutos  = setDoisDigitos(agora.getMinutes());
    var segundos = setDoisDigitos(agora.getSeconds());

    relogio.innerHTML = hora + ":" + minutos + ":" + segundos;
}


function iniciar() {
    intervalo = setInterval(mostrarHora,1000);
}

window.onload = iniciar;