/* const carrito = [];

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
}

const quitarDelCarrito = () => {
    carrito.pop();
}

const verCarrito = () => {
    let listaCarrito = carrito.join(", ");
    return listaCarrito;
}

let menu = prompt('Que quieres hacer? \n1- Agregar producto al carrito \n2- Quitar ultimo producto del carrito \n3- Ver carrito \n4- Salir');

while (menu !== '4') {
    switch (menu) {
        case '1':
            let producto = prompt("Ingrese el nombre del producto a agregar al carrito:");
            agregarAlCarrito(producto);
            break;
        case '2':
            quitarDelCarrito();
            alert("Ultimo producto eliminado del carrito.");
            break;
        case '3':
            alert("Productos en el carrito: " + verCarrito());
            break;
        default:
            alert("Opcion no valida, por favor intente de nuevo.");
    }
    menu = prompt('Que quieres hacer? \n1- Agregar producto al carrito \n2- Quitar ultimo producto del carrito \n3- Ver carrito \n4- Salir');
} */

let carrito = [];
let carritoGuardado = localStorage.getItem('carrito');

if (carritoGuardado !== null) {
    carrito = JSON.parse(carritoGuardado);
}

class Producto {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

const inputProducto = document.getElementById('productoInput');
const inputCantidad = document.getElementById('cantidadInput');
const btnAgregar = document.getElementById('btnAgregar');
const btnQuitar = document.getElementById('btnQuitar');
const contenedorCarrito = document.getElementById('listaCarrito');

const actualizarCarrito = () => {
    let contenidoHTML = ``;

    carrito.forEach(producto => {
        contenidoHTML += `<li>${producto.nombre} - Cantidad: ${producto.cantidad}</li>`;
    });

    contenedorCarrito.innerHTML = contenidoHTML;

    let carritoString = JSON.stringify(carrito);
    localStorage.setItem('carrito', carritoString);
}

btnAgregar.addEventListener('click', () => {
    let nombreProducto = inputProducto.value.trim();

    if (nombreProducto !== '') {
        const cantidadProducto = parseInt(inputCantidad.value.trim());
        if (!cantidadProducto || cantidadProducto <= 0) {
            alert('Por favor, ingresa una cantidad válida.');
            return;
        }
        const nuevoProducto = new Producto(nombreProducto, cantidadProducto);
        carrito.push(nuevoProducto);
        inputProducto.value = '';
        inputCantidad.value = '';
        actualizarCarrito();
    } else {
        alert('Por favor, ingresa el nombre de un producto.');
    }
});

btnQuitar.addEventListener('click', () => {
    if (carrito.length > 0) {
        carrito.pop();
        actualizarCarrito();
    } else {
        alert('El carrito ya está vacío.');
    }
});

actualizarCarrito();