
    const tarea=document.getElementById("miLista")
    const fecha=document.getElementById("fecha")
    const tareas=document.getElementById("tareas")
    const boton = document.getElementById("miBoton");
    const caja=document.getElementById("contenedor");
    // let listaTarea=[]
    

    caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "red";
});

caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "blue";
});
// Agregar un evento de clic
// boton.addEventListener("click", guardartarea); 

// {
//     alert("¡Botón clickeado!");
// });

document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
if(evento.key=="eEnter"){
    guardarTarea()
}
})

boton.addEventListener("click",guardarTarea)


function guardarTarea(){
    let txtTarea=tarea.value 
    let txtFecha=fecha.value 

    console.log(txtFecha)
    console.log(txtTarea)

    const nuevaTarea=document.createElement('li');
    nuevaTarea.innerHTML="<h1>" + txtTarea + "</h1><p>"+ txtFecha + "</p>"
    tareas.appendChild(nuevaTarea)
    let tareaGuardar={"tarea":txtTarea, "fecha":txtFecha}
    listaTarea.push(tareaGuardar)
    localStorage.setItem("tareas", JSON.stringify(listaTarea));
}

// Accedemos al elemento select
var lista = document.getElementById("miLista");

// Añadimos un evento para cuando cambie la selección
lista.addEventListener("change", function() {
  var opcionSeleccionada = lista.value;  // Obtenemos el valor de la opción seleccionada
  console.log("Seleccionaste: " + opcionSeleccionada);
});


let edad = 1;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de Edad")
}

let nota = 34;

if (nota >= 90) {
    console.log("Sobresaliente");
} else if (nota >= 75) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

localStorage.setItem('clave', 'valor');

// Crear un array vacío
let miArray = [];

// Crear un array con elementos
let numeros = [1, 2, 3, 4, 5];

// Agregar un elemento al final
numeros.push(6); // [1, 2, 3, 4, 5, 6]

// Eliminar el último elemento
numeros.pop(); // [1, 2, 3, 4, 5]
            

function cargarTareas(){
    let listaTarea=JSON.parse(localStorage.getItem('tareas'));
  
  for(let i=0; i<listaTareas.length;i++){
    const nuevaTarea=document.createElement('li');
    nuevaTarea.innerHTML="<h1>"+listaTareas[i].tarea+"</h1><p>"+listaTareas[i].fecha+"</p>"
    tareas.appendChild(nuevaTarea)
  }
  
        console.log(listaTareas) 
    };
