function showModal(){
    document.getElementById("dialog").showModal();
}
const btnAgregar = document.getElementById("add")

btnAgregar.addEventListener("click", function(){
    let tareatxt = document.getElementById("tarea").value
    const List = document.getElementById("List")

    if(tareatxt == ""){
        return;
    }
    let ContTarea = document.createElement("div")
    ContTarea.className = "tarea"
    ContTarea.textContent = tareatxt
    let btnEliminar = document.createElement("button")
    btnEliminar.id = "btn-delete"
    btnEliminar.onclick = function(){
        eliminar(this)
    }
    let icon = document.createElement("i")
    icon.className = "fa-solid fa-trash"
    btnEliminar.appendChild(icon)
    ContTarea.appendChild(btnEliminar)
    List.appendChild(ContTarea)
    document.getElementById("tarea").value = ""
});
function eliminar(botonEliminar){
    const contenedor = botonEliminar.parentElement;
    contenedor.remove();
}