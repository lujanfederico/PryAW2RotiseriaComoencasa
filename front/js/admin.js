console.log("ADMIN JS CARGADO");


const URL = "/api/productos";
const contenedor = document.getElementById("productos");
let editandoId = null;


async function verificarSesion() {

    console.log("Verificando sesión...");

    try {

        const respuesta = await fetch("/api/usuarios/verificar");

        console.log("Estado de respuesta:", respuesta.status);

        const datos = await respuesta.json();

        console.log("Datos recibidos:", datos);


        if (!respuesta.ok) {

            console.log("No hay sesión, enviando al login");

            window.location.href = "login.html";

        }


    } catch(error) {

        console.log("Error:", error);

        window.location.href = "login.html";

    }

}


verificarSesion();





async function cargarProductos(){
    const respuesta = await fetch(URL);
    const productos = await respuesta.json();
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="./recursos/imagenes/${producto.imagen}" alt="${producto.nombre}" class="img-producto">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>$${producto.precio}</p>
                <button onclick="prepararModificacion(${producto.id})">Modificar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </div>
        `;
    });
}






async function eliminarProducto(id){
    if (confirm("¿Estás seguro de que querés eliminar este producto?")) {
        await fetch(`${URL}/${id}`,{
            method:"DELETE"
        });
        cargarProductos();
    }
}







async function prepararModificacion(id) {
    const respuesta = await fetch(`${URL}/${id}`);
    const producto = await respuesta.json();

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("imagen").value = producto.imagen;
    document.getElementById("precio").value = producto.precio;

    const botonSubmit = document.querySelector("#formProducto button[type='submit']");
    botonSubmit.textContent = "Guardar Cambios";
    editandoId = id;
}

document.getElementById("formProducto").addEventListener("submit", async (e)=>{
    e.preventDefault();

    const producto = {
        nombre: nombre.value,
        descripcion: descripcion.value,
        imagen: imagen.value,
        precio: precio.value
    };

    if (editandoId) {
        await fetch(`${URL}/${editandoId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        editandoId = null;
        document.querySelector("#formProducto button[type='submit']").textContent = "Agregar Producto";
    } else {
        await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        });
    }

    e.target.reset();
    cargarProductos();
});

cargarProductos();





window.cerrarSesion = async function () {
    console.log("Logout clickeado");

    try {
        await fetch("/api/usuarios/logout", {
            method: "POST",
            credentials: "include"
        });

        window.location.href = "/login.html";

    } catch (error) {
        console.log("Error en logout:", error);
    }
};