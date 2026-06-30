const contenedorProductos = document.getElementById("productos");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


fetch("/api/productos")
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            contenedorProductos.innerHTML += `
                <div class="card">
                    <img src="recursos/imagenes/${producto.imagen}" alt="${producto.nombre}">
                    
                    <div class="contenido-card">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.descripcion}</p>
                        <span class="precio">$${producto.precio}</span>

                        <button class="btn-agregar"
                         onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, '${producto.imagen}')">
                         Agregar al carrito
                        </button>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.log(error));



function agregarAlCarrito(nombre, precio, imagen) {

    carrito.push({ nombre, precio, imagen});

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();
}



function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.innerText = carrito.length;
    }
}


function mostrarCarrito() {
    window.location.href = "carrito.html";
}



window.addEventListener("pageshow", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    actualizarContador();
});