seleccion = document.querySelector("#lista-carrito tbody");

curso_seleccion = document.querySelector("#lista-cursos");



cargarlisteners();



function cargarlisteners(){
    curso_seleccion.addEventListener("click",cargar);
}

function cargar(e){
  
    if(e.target.classList.contains("agregar-carrito")){
        curso_verdadero = e.target.parentElement.parentElement;
        
        cursando(curso_verdadero);
    };


}

function cursando(curso){

    const cursando = {
        imagen: curso.querySelector("img").src
    }

    console.log(cursando);
}