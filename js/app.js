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

  carrito=[...carrito,curso];

  

  

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