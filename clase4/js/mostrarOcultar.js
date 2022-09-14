//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos funciones de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
    caja.style.borderColor = '#0a2';
}

function interruptor()
{
    if( caja.style.display == 'block' ){
        ocultar();
    }else{
        mostrar();
    }
}