//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
mostrar la fecha
formato  Lunes 12/09/2022
*/

//creamos un objeto de fecha
let fecha = new Date();
    console.log(fecha);

//obtenemos día de la semana
let diaSemana = fecha.getDay();
    console.log(diaSemana);

    switch( diaSemana )
    {
        case 0: 
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miércoles';
            break;
        case 4:
            diaSemana = 'Jueves';
            break;
        case 5:
            diaSemana = 'Viernes';
            break;
        default:
            diaSemana = 'Sábado';
            break;
    }


//obtenemos número de día de mes
let diaMes = fecha.getDate();
// agregamos 0 para dos caractéres
    if( diaMes < 10 ){
        diaMes = '0'+ diaMes;
    }

//obtenemos el número del mes
let mes = fecha.getMonth() + 1;
// agregamos 0 para dos caractéres
    if( mes < 10 ){
        mes = '0'+ mes;
    }

//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos dentro del txt
//txt.innerText = diaSemana +' '+ diaMes + '/' + mes + '/' + anio;

//template literal
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;
