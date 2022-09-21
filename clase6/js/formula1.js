//ubicar elemento/s dentro deo DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');

//botones
const btnRedbull = document.querySelector('#btnRedbull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnMercedes = document.querySelector('#btnMercedes');
const btnMclaren = document.querySelector('#btnMclaren');

/* disparadores de eventos */
btnRedbull.addEventListener(
    'click',
    function()
    {
        //función anónima
        escuderia('redbull');
    }
);
btnFerrari.addEventListener(
    'click',
    function()
    {
        escuderia('ferrari');
    }
);
btnMercedes.addEventListener(
    'click',
    function()
    {
        escuderia('mercedes');
    }
);
btnMclaren.addEventListener(
    'click',
    function()
    {
        escuderia('mclaren');
    }
);

/* estado inicial  (ocultos)  */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos función/es de control
function  escuderia( team )
{
    redbull.style.display = 'none';
    ferrari.style.display = 'none';
    mercedes.style.display = 'none';
    mclaren.style.display = 'none';

/*
    if( team == 'redbull' ){
        redbull.style.display = 'flex';
    }
    else if( team == 'ferrari' ){
        ferrari.style.display = 'flex';
    }
    else if( team == 'mercedes' ){
        mercedes.style.display = 'flex';
    }
    else if( team == 'mclaren' ){
        mclaren.style.display = 'flex';
    }
*/

    switch( team ){
        case 'redbull':
            redbull.style.display = 'flex';
            break;
        case 'ferrari':
            ferrari.style.display = 'flex';
            break;
        case 'mercedes':
            mercedes.style.display = 'flex';
            break;
        case 'mclaren':
            mclaren.style.display = 'flex';
            break;
    }
    
}