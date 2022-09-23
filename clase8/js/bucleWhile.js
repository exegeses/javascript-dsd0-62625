let n = 1;//inicio
while(  n < 15  ) 
    { //límite
        document.write(n, '<br>');
        n++; //incremento
    }
/* combinando con arrays */
const sabores = [
                    'Pistacchio', 'Menta Granizada',
                    'Limón', 'Tiramisu', 'Chocolate',
                    'Crema del cielo', 'Chocolat con Almendras', 'Frutos Rojos',
                    'Crema Rusa'
                ];

const txt = document.querySelector('#txt');

n = 0;
let contenido = '';
while(  n < sabores.length  )
    {
        //document.write( sabores[ n ], '<br>' ); 
        contenido += `<li>${sabores[n]}</li>`;
        console.log( contenido );
        n++;
    }
txt.innerHTML = contenido;