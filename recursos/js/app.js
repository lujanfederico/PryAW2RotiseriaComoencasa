const contenedorProductos = document.getElementById("productos");
let carrito = []; // Lista para guardar los productos seleccionados

fetch("https://69c566e48a5b6e2dec2c6298.mockapi.io/api/v1/comidas")
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            contenedorProductos.innerHTML += `
                <div class="card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="contenido-card">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.descripcion}</p>
                        <span class="precio">$${producto.precio}</span>
                        
                        <!-- Agregamos el botón aquí -->
                        <button class="btn-agregar" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.log(error));

// Función para manejar el carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarContador();
    console.log("Carrito actual:", carrito);
}

function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.innerText = carrito.length;
    }
}