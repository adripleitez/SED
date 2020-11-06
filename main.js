
function ocultarPyT(){
    document.getElementById('tarjetas').style.display="none";
    document.getElementById('Principal').style.display="none";
}

function ocultarPyC(){
    document.getElementById('cuentas').style.display="none";
    document.getElementById('Principal').style.display="none";
}

function ocultarCyT(){
    document.getElementById('cuentas').style.display="none";
    document.getElementById('tarjetas').style.display="none";
}

function mostrarCuentas(){
    ocultarPyT();
    document.getElementById('cuentas').style.display="block";
}
function mostrarTarjetas(){
    ocultarPyC();
    document.getElementById('tarjetas').style.display="block";
}

function mostrarP(){
    ocultarCyT();
    document.getElementById('Principal').style.display="block";
}

