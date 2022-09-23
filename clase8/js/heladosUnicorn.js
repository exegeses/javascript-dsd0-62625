const sabores = [
    'Pistacchio', 'Menta Granizada',
    'Limón', 'Tiramisu', 'Chocolate',
    'Crema del cielo', 'Chocolat con Almendras', 'Frutos Rojos',
    'Crema Rusa'
];

const txt = document.querySelector('#txt');
const nuevoSabor = document.querySelector('#nuevoSabor');

function mostrarSabores() 
{
    txt.innerHTML = '';
    for( let i = 0; i < sabores.length; i++ )
    {
        txt.innerHTML += `<li>${sabores[i]}</li>`;
    }    
}
mostrarSabores();

function proponer()
{
    let sabor = nuevoSabor.value;
    sabores.push(sabor);
    mostrarSabores();
}
