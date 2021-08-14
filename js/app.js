//variables.

//se utiliza const por que no se reasigna.
//utilizamos el carrito , es decir obtenemos el carrito
const carrito = document.querySelector('#carrito');

//obtenemos adicional la lista de los cursos 
//aviso estoy obteniendo un div.

//solo tengo 1 elemento
//este elemento es el div padre , es decir el div que contiene los otros divs que traen la informacion.
const listacursos = document.querySelector('#lista-cursos');
console.log(listacursos);


const ContenedorCarrito = document.querySelector('#lista-carrito tbody');

//boton de vaciarcarrito.

//este vaciar carrito nos va a funcionar para eliminar todos los elementos.
//este boton esta dibujado en la tabla
const vaciarCarritobtn = document.querySelector('#vaciar-carrito');


//buena practica es tener una funcion que registre todos los event listeners.
CargarEventListeners();

function CargarEventListeners(){
    //al dar clic en agregar al carrito
    listacursos.addEventListener('click', agregarCurso);
}

//funciones.
//aqui se puede presentar el eventbubbling por eso pasamos la letra e
function agregarCurso(e){
    e.preventDefault();
    //para omitir el event bubling hacemos uso de .contains.
    //de esta manera nos aseguramos que solo se ejecute al dar clic en el boton
    if(e.target.classList.contains('agregar-carrito')){
      

        //adicional a todo es importante revisar que desde el elemento padre o div padre.
        //puedo acceder a sus otras funciones

        const cursoSeleccionado = (e.target.parentElement.parentElement);

        /*
        Mi codigo

        const titulo = cursoSeleccionado.querySelector("h4").textContent
        const imagen = cursoSeleccionado.querySelector("img").src
        const precio = cursoSeleccionado.querySelector(".precio").textContent)
        */
       
        

          //invocamos la funcion
          leerdatoscurso();


    }
}

//vamos a hacer una funcion que lea los elementos del curso.

function leerdatoscurso(){

}
