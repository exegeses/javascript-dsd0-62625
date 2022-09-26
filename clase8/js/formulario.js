const formulario = document.querySelector('#formulario');
//campos de texto para el usuario
const nombre = document.querySelector('input[name="nombre"]');
const email = document.querySelector('input[name="email"]');
const comentarios = document.querySelector('textarea[name="comentarios"]');

//spans para mensajes de validación
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');

//función de validación
formulario.addEventListener(
    'submit',
    function( evento )
    {
        //evitamos envío de formulacio
        evento.preventDefault();
        //borramos emnsajes de error
        borrarMensajes();

        let check = true;

        //validamos dato en el campo nombre
        let datoNombre = nombre.value;
        if( checkVacio( datoNombre ) ){
            check = false;
            txtNombre.innerText = 'Complete el campo Nombre';
        }

        //validamos dato en el campo email
        let datoEmail = email.value;
        if( !validarEmail( datoEmail ) ){
            check  = false;
            txtEmail.innerText = 'Complete el campo Email';
        }

        //validamos campo comentarios
        let datoComentarios = comentarios.value
        if( checkVacio(datoComentarios) || datoComentarios.length < 6 ){
            check = false;
            txtComentarios.innerText = 'Complete el campo Comentarios';
        }

        /* si llega hasta acá con flag en true */
        //enviamos el form
        if( check ){
            formulario.submit();
        }
    }
);

function checkVacio( dato )
{
    if( dato.length == 0 || dato == null ){
        return true;
    }
    return false;
}

function validarEmail (email) {
    let exp = /\S+@\S+\.\S+/;
    return exp.test(email);
}

function borrarMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '';
    txtComentarios.innerText = '';
}