/*const marcas = new Array(
                    'Adidas', 'Puma', 'Assics', 
                    'UniQlo', 'Nike', 'New Balance'
                    ); */
const marcas = [
                    'Adidas', 'Puma', 'Assics', 
                    'UniQlo', 'Nike', 'New Balance'
                ];
const txt = document.querySelector('#txt');
                
console.log( marcas );

txt.innerText = marcas[1];

/* fecha  */
let fecha = new Date();

//obtenemos día de la semana
let diaSemana = fecha.getDay();

const semana = [
                    'Domingo', 'Lunes', 'Martes', 
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                ];
