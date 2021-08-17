let curso_boton = document.querySelector("#lista-cursos");

let carrito = [];

cargarListeners();

function cargarListeners(){
    curso_boton.addEventListener("click",cargacurso);
}

function cargacurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccion = e.target.parentElement.parentElement;
        agregarCurso(cursoSeleccion);
    }
}

function agregarCurso(curso){

    const seleccion = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector(".agregar-carrito").getAttribute("data-id"),
        cantidad:1,
    }

    curso_mismo = carrito.some(element=>element.id === seleccion.id);

    if(curso_mismo){
        const nuevo_carro = carrito.map(element=>{
            if(element.id === seleccion.id){
                element.cantidad++;
                return element;
            }
            else{
                return element;
            }

        });
        carrito= [...nuevo_carro];
    }
    else{
        carrito= [...carrito,seleccion]
    }


    pintar();

}

function pintar(){
    carrito.forEach(element=>{
        const row = document.createElement('tr');
        

    });
}