//para declaración variables utilizamos 
//la palabra reservada "let"
let numero = 9;
let frase = 'hola mundo';
//para la declaración de constantes
// utilizamos la palabra reservada const
const nombre = 'marcos';


/* mostramos valores en la consola */
console.log( numero );
console.log( frase );
console.log( nombre );


/* mostramos valores en el documento */
document.write( numero );
document.getElementById('txt').innerText = frase;

/* sobreescribimos valor de numero */
numero = 10;
document.write( numero );
// nombre = 'azael'; no se puede porqu es constante
