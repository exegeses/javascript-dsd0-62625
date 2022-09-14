//const txt = document.getElementById('txt');
const txt = document.querySelector('#txt');

let mensaje = 'Texto plano <b>sin formato</b>';
mensaje = mensaje + '<img src="imgs/elephant.png" style="margin-left: 32px; vertical-align: middle;">';


//mostramos el contenido
txt.innerHTML = mensaje;