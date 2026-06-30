let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("lista-carrito");

function renderCarrito() {

    contenedor.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {

        contenedor.innerHTML += `
    <div class="item-carrito">
        <img src="recursos/imagenes/${producto.imagen}" width="60">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="eliminarItem(${index})">Eliminar</button>
    </div>
`;
        total += producto.precio;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    renderCarrito();
}

function volverCatalogo() {
    window.location.href = "index.html";
}


function finalizarCompra(){

    if(carrito.length === 0){

        alert("El carrito está vacío.");

        return;

    }

    carrito = [];

    localStorage.removeItem("carrito");

    window.location.href = "compra.html";

}




renderCarrito();