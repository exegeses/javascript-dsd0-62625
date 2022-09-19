// hoja de estilo a cambiar
let theme = document.querySelector('link[href="css/dark.css"]');

//botón para cambiar de estilo
let btnSwitcher = document.querySelector('#switcher');

//imáegnes a intercambiar
let imgDark = document.querySelector('img[src="imgs/dark.png"]');
let imgModo = document.querySelector('img[src="imgs/night-mode.png"]');

let flag = 'dark'; //modo prefdeterminado

btnSwitcher.addEventListener('click', function()
{
    cambiarModo();
});


//función de cambio de modo
function cambiarModo()
{
    if( flag == 'dark' ){
        theme.href="css/light.css";
        imgDark.src = "imgs/light.png";
        imgModo.src = "imgs/day-mode.png";
        flag = 'light';
        return;
    }
        theme.href="css/dark.css";
        imgDark.src = "imgs/dark.png";
        imgModo.src = "imgs/night-mode.png";
        flag = 'dark';
        return;
}
