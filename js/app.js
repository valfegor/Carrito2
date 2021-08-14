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

  console.log(carrito);
}
