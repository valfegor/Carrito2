//vamos a empezar

const listaCarrito = document.querySelector("#lista-carrito tbody");

const seleccionar = document.querySelector("#lista-cursos");

let carrito = [];

//listeners

cargarListeners();

function cargarListeners() {
  seleccionar.addEventListener("click", añadir);
}

function añadir(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso_Seleccionado = e.target.parentElement.parentElement;

    añadirAcarrito(curso_Seleccionado);
  }
}

function añadirAcarrito(cursito) {

    //Destructuring el array
    
  let curso = {
    imagen:cursito.querySelector('img').src,
    nombre:cursito.querySelector('h4').textContent,
    precio:cursito.querySelector('.precio span').textContent,
    codigo:cursito.querySelector('.agregar-carrito').getAttribute("data-id"),
    Cantidad:1,
  };

  //para recordar este tipo de validaciones se realiza antes de que el arreglo se llene
  //es decir tiene que estar en 0 , luego de eso si se valida cuando ya tengo datos.
  const existe = carrito.some(element=>element.nombre===curso.nombre);

  if(existe) {
    const cursoActualizado = carrito.map(cursoAc =>{
        if(cursoAc.nombre === curso.nombre){
          cursoAc.Cantidad++;
          return cursoAc;
        }
        else{
          return cursoAc;
        }
    })
    carrito = [...cursoActualizado];
  }
  
  else{
    carrito=[...carrito,curso]; 
  }

  console.log(existe);

  

  

  pintarHtml(carrito);
  
}

function pintarHtml(carrito){
        borrarHTML();
    carrito.forEach(element => {
            const row = document.createElement('tr');

            row.innerHTML = `
            <td> <img src="${element.imagen}"></td>
            <td>${element.nombre}</td>
            <td>${element.precio}</td>
            <td>${element.Cantidad}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${element.codigo}">X</a>
            </td>
            `

            listaCarrito.appendChild(row);
    });

}



function borrarHTML(){

    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

}