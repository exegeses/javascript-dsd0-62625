//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

/* código sin ninguna interactividad 
caja.style.backgroundColor = '#0d2';
caja.innerText = 'verde';
caja.style.color = '#000';
*/

//declaración 
function pintarVerde()
{
    caja.style.backgroundColor = '#0d2';
    caja.innerText = 'verde';
    caja.style.color = '#000';
}
function pintarGris()
{
    caja.style.backgroundColor = '#999';
    caja.innerText = 'gris';
    caja.style.color = '#000';
}
function pintarCeleste()
{
    caja.style.backgroundColor = '#45e0fc';
    caja.innerText = 'celeste';
    caja.style.color = '#000';
}

function pintar( colorFondo, nombre )
{
    caja.style.backgroundColor = colorFondo;
    caja.innerText = nombre;
    caja.style.color = '#000';
}