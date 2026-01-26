const carrito = [];

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
}