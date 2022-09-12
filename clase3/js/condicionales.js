let fecha = new Date();

let diaSemana = fecha.getDay();

/*if( diaSemana == 0 ){
    diaSemana = "Domingo";
}
else if ( diaSemana == 1 ){
    diaSemana = "Lunes";
}
else if ( diaSemana == 2 ){
    diaSemana = "Martes";
}
else if ( diaSemana == 3 ){
    diaSemana = "Miercoles";
}
else if (diaSemana == 4){
    diaSemana = "Jueves";
}
else if (diaSemana == 5){
    diaSemana = "Viernes";
}
else {
    diaSemana = "Sabado";
}*/

switch ( diaSemana )
{
    case 0:
        diaSemana = 'Domingo';
        console.log(diaSemana);
        break;
    case 1:
        diaSemana = 'Lunes';
        console.log(diaSemana);
        break;
    case 2:
        diaSemana = 'Martes';
        console.log(diaSemana);
        break;
    case 3:
        diaSemana = 'Miércoles';
        console.log(diaSemana);
        break;
    case 4:
        diaSemana = 'Jueves';
        console.log(diaSemana);
        break;
    case 5:
        diaSemana = 'Viernes';
        console.log(diaSemana);
        break;
    default:
        diaSemana = 'Sábado';
        console.log(diaSemana);
        break;
}