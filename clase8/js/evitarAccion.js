const enlace = document.querySelector('#enlace');

enlace.addEventListener(
        'click',
        function( evento )
        {
            console.log( evento );
            //impedimos la acción natural del enlace
            evento.preventDefault();
        }
)