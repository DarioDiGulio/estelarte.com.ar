localStorage.setItem('carrito', JSON.stringify([]))

function aumentarCantidad(producto) {
    producto.cantidad = parseInt(producto.cantidad) + 1
}

function restarCantidad(producto) {
    producto.cantidad = parseInt(producto.cantidad) - 1
}

function eliminarProducto(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    carrito.splice(index, 1)
    return carrito
}

function agregarProducto(id) {
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    if (carrito.length === 0) {
        carrito.push({id, 'cantidad': 1})
    } else {
        carrito.forEach(producto => {
            if (producto.id === id) aumentarCantidad(producto);
        })
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function descontarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito'))
    if (carrito.length === 0) {
        return
    } else {
        carrito.forEach((producto, index) => {
            if (producto.id === id) restarCantidad(producto);
            if (producto.cantidad <= 0) carrito = eliminarProducto(producto.id, index);
        })
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
}