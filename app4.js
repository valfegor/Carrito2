let seleccion = document.querySelector("#lista-carrito tbody");

let curso_seleccion = document.querySelector("#lista-cursos");

let eliminar = document.querySelector("#carrito");

let carrito = [];



cargarlisteners();



function cargarlisteners(){
    curso_seleccion.addEventListener("click",cargar);
    eliminar.addEventListener("click",eliminate);
}

function cargar(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        curso_verdadero = e.target.parentElement.parentElement;
        
        cursando(curso_verdadero);
    };


}

function cursando(curso){

    const cursando = {
        imagen: curso.querySelector("img").src,
        titulo:curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        cantidad:1,
        id:curso.querySelector(".agregar-carrito").getAttribute("data-id"),
    }

    let existe = carrito.some(curs => curs.titulo === cursando.titulo);


    if(existe){
        carro_cantidad = carrito.map(cursoactualizado=>{
            if(cursoactualizado.titulo===cursando.titulo){
                cursoactualizado.cantidad ++;
                return cursoactualizado;
            }
            else{
                return cursoactualizado;
            }

            
        })
        carrito =[...carro_cantidad];
    }else{
        carrito = [...carrito,cursando];
    }

    

    pintar(carrito);

}


function pintar(carro){

    limpiarHTML();
    
    carro.forEach((cursos)=>{

        row = document.createElement("tr");

        row.innerHTML = `
        <td><img src="${cursos.imagen}" class="imagen-curso u-full-width"></td>
        <td>${cursos.titulo}</td>
        <td>${cursos.precio}</td>
        <td>${cursos.cantidad}</td>
        <td>
        
        <a href="#" class="borrar-curso" data-id="${cursos.id}">X</a>
         </td>
        `
        
        seleccion.appendChild(row);

    });
   
}


function limpiarHTML (){
    while(seleccion.firstChild){
        seleccion.removeChild(seleccion.firstChild);
    }
}

function eliminate(e){
    console.log(e.target.classList);
    
    if(e.target.classList.contains("borrar-curso")){
        const Elim = e.target.getAttribute('data-id');

        carrito = carrito.filter(curso=>curso.id !== Elim);

        pintar(carrito);
    }
}

