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

//Este va a ser nuestro carrito de compras , es un array vacio.
//conforme el usuario va dando clic se va a ir agregando
//se va a llenar conforme se de clic.
let articulosCarrito = [];
//buena practica es tener una funcion que registre todos los event listeners.
CargarEventListeners();

function CargarEventListeners(){
    //al dar clic en agregar al carrito
    //recordemos que listacursos es el div padre que contiene los demas cursos.
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

        //de aqui vamos a empezar a sacar toda la informacion del curso
        //es decir cuando el usuario de clic especificamente a ese elemento se activa el proceso.
        const cursoSeleccionado = e.target.parentElement.parentElement;

        /*
        Mi codigo

        const titulo = cursoSeleccionado.querySelector("h4").textContent
        const imagen = cursoSeleccionado.querySelector("img").src
        const precio = cursoSeleccionado.querySelector(".precio").textContent)
        */
       


          //invocamos la funcion , pasamos como parametro el curso al cual le estan dando clic
          leerdatoscurso(cursoSeleccionado);


    }
}

//vamos a hacer una funcion que lea los elementos del curso.

function leerdatoscurso(curso){
    console.log(curso);

    //crear objeto con el contenido del curso actual.
    //generalmente se hace con document , pero recordemos que se tiene la referencia del curso.
    //cada curso va a tener un ID , si revisamos la estructura del html.
    //al finalizar cada curso tenemos data-id="11"
    //se obtiene el atributo
    //en esta parte vamos a controlar que si el usuario da clic varias veces en el mismo boton,
    //se agrege la cantidad 

    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }

    //llenar los elementos al arreglo.
    //aqui vamos a utilizar el spread operator
    //tambien se pudo haber utilizado articulosCarrito.push(infoCurso);
    //voy a tomar una copia del carrito de compras ... ya que la primera vez va a estar vacio
    //es un acumuluador
    //lo que hacemos aqui en el segundo parametro es el objeto delos datos de ocmo lo vamos a llenar
    articulosCarrito = [...articulosCarrito , infoCurso];

    console.log(articulosCarrito);

    carritoHtml();
}


//funcion que pinta el carrito de la compra.

//ESTA FUNCION SE MANEJA DE LA SIGUIENTE manera
//AL HACER CLIC SE LIMPIA EL HTML , ES DECIR SIEMPRE AL INICIO VA A SER UNA CADENA VACIA = ""
//LUEGO RECORRE CADA UNO DE LOS ELEMENTOS , LO PINTA EN EL TBODY.
//AHORA SI YO HAGO CLIC NUEVAMENTE EN OTRO CURSO EL ARRAY YA CONTIENE 2 ELEMENTOS , POR LO TANTO SE LIMPIA Y ESCRIBE LOS 2 ELEMENTOS NADA MAS , ASI SUCESIVAMENTE POR ESO ES IMPORTANTE LIMPIAR EL HTML
function carritoHtml() {

    //como obligatoriamente es un array recordemos que podemos hacer uso en este caso ya que es un array de objetos de Foreach.

    //limpiar el HTML.

    limpiarHTML();

    //funcion flecha
    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso =>{
        //cada curso se va a ir insertando el tablebody.

        //tenemos que crear un tr.

        const Row = document.createElement('tr');
        //el orden de los td es importante ya que tenemos una table

        /*
        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
        */

        //el id me va a ayudar a identificar que curso esta intentando eliminar el usuario
        Row.innerHTML = `
        <td>
           <img src = "${curso.imagen}">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            ${curso.cantidad}
        </td>
        <td>
        
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
         </td>
        
        `
        //al contenedor del carrito , le vamos a agregar en el carrito tbody.
        //le pasamos al tbody que tenemos como contenedor
        //aqui ocurre un problema si yo sigo dando clic me va a ir agregando al tbody pero es importante conocer de que este tbody debe limpiar el html por que si no se limpia va a seguir agregando elementos al carrito.
        ContenedorCarrito.appendChild(Row);
        })
}

//eliminar los cursos del tbody.

function limpiarHTML(){
    //lo que yo quiero limpiar en este caso es el tbody
    /*
    Forma lenta 
    ContenedorCarrito.innerHTML = "";
    */

    //forma rapida el while se ejecuta mientras una condicion sea evaluada como verdadera

    //lo que quiere decir es lo siguiente si ese contenedor carrito tiene almenos un elemento
    //el codigo se seguira ejecutando
    while(ContenedorCarrito.firstChild){
        //aqui se esta eliminando por referencia
        //un elemento se borra desde el padre o por si mismo
        ContenedorCarrito.removeChild(ContenedorCarrito.firstChild);

        
        console.log(ContenedorCarrito.firstChild)
    }

    

    /*
        tenemos un div de la siguiente manera
        se esta revisando con el while que mientras haya un hijo la condicion se cumple ya que hay tres elementos en este ejemplo son 3 parrafos , el elemento padre que es el div va a eliminar un hijo por el primero , es decir elimina el 1 y despues vuelve a comprobar , asi hasta que todo el div este totalmente vacio , en este caso del programa funciona de manera de que se agrega el arreglo 
        <div>
        p 1
        p 2
        p 3
        </div>
    */
    
}