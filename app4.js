seleccion = document.querySelector("#lista-carrito tbody");

curso_seleccion = document.querySelector("#lista-cursos");



let carrito = [];



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
        imagen: curso.querySelector("img").src,
        titulo:curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span"),
        cantidad:1,
        id:curso.querySelector(".agregar-carrito").getAttribute("data-id"),
    }

    

    carrito = [...carrito,cursando];

    pintar(carrito);

}


function pintar(carro){

    
    carro.forEach((cursos)=>{

        console.log(cursos.titulo);
    });
   
}