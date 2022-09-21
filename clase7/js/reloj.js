const txt = document.querySelector('#txt');

function dosDigitos( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}


/* 14:11:46 */
function reloj()
{
    //creamos un objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();
    //obtenemos los minutos
    let minutos = dosDigitos( fecha.getMinutes() );
    //obtenemos los minutos
    let segundos = dosDigitos( fecha.getSeconds() );
    //segundos = dosDigitos( segundos )

    //imprimimos en el span     ${}
    txt.innerText= `${horas}:${minutos}:${segundos}`;
}

//invocamos la función reloj
reloj();

//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );