window.localStorage.setItem('carrito', JSON.stringify([]))

const dataProductos = [
    {
        id: "Despojadores de biju chico",
        src: "../../imagenes/catalogo/despojadorChico.jpg",
        title: "Despojadores de biju",
        description: "Chico",
        price: "2000"
    },
    {
        id: "Despojadores de biju grande",
        src: "../../imagenes/catalogo/despojadorGrande.jpg",
        title: "Despojadores de biju",
        description: "Grande",
        price: "2500"
    },
    {
        id: "Manito de Fátima",
        src: "../../imagenes/catalogo/portaSaumerios.jpg",
        title: "Manito de Fátima",
        description: "Porta saumerios",
        price: "1500"
    },
    {
        id: "Posa vaso",
        src: "../../imagenes/catalogo/posaVaso.jpg",
        title: "Posa vaso",
        description: "Efecto mármol",
        price: "2000"
    },
    {
        id: "Bandejas de Terrazo oval",
        src: "../../imagenes/catalogo/bandejaDeTerrazo.jpg",
        title: "Bandejas de Terrazo oval",
        description: "Varios colores - 18cm",
        price: "4500"
    },
    {
        id: "Bandejas de Terrazo grande",
        src: "../../imagenes/catalogo/bandejaDeTerrazoGrande.jpg",
        title: "Bandejas de Terrazo",
        description: "Para mesa - 19cm",
        price: "8000"
    },
    {
        id: "Bandejas de Terrazo con chispas",
        src: "../../imagenes/catalogo/bandejaDeTerrazoConChispas.jpg",
        title: "Bandejas de Terrazo",
        description: "Con chispas de terrazo - 18cm",
        price: "4700"
    },
    {
        id: "Porta Vela",
        src: "../../imagenes/catalogo/portaVela.jpg",
        title: "Porta Vela",
        description: "Varios colores",
        price: "1700"
    },
    {
        id: "SET de Baño Completo",
        src: "../../imagenes/catalogo/banioCompleto.jpg",
        title: "SET de Baño Completo",
        description: "Bandeja - Porta vela - Dispenser de jabón líquido",
        price: "10000"
    },
    {
        id: "Combo de Baño",
        src: "../../imagenes/catalogo/comboBanio.jpg",
        title: "Combo de Baño",
        description: "Bandeja - Dispenser de jabón líquido",
        price: "7000"
    },
    {
        id: "Dispenser de jabón líquido",
        src: "../../imagenes/catalogo/dispenserJabon.jpg",
        title: "Dispenser de jabón líquido",
        description: "Terrazo",
        price: "5000"
    },
    {
        id: "Mesa pua",
        src: "../../imagenes/catalogo/mesaPua.jpg",
        title: "Mesa pua",
        description: "70 x 50cm - Resina epoxi - Color mármol",
        price: "29000"
    },
]

function aumentarCantidad(producto) {
    producto.cantidad = parseInt(producto.cantidad) + 1
}

function restarCantidad(producto) {
    producto.cantidad = parseInt(producto.cantidad) - 1
}

function eliminarProducto(index) {
    const carrito = JSON.parse(window.localStorage.getItem('carrito'))
    carrito.splice(index, 1)
    return carrito
}

function existeProductoEnCarrito(id) {
    const carrito = JSON.parse(window.localStorage.getItem('carrito'))
    const filter = carrito.filter(producto => producto.id === id)
    return filter.length !== 0
}

function agregarProducto(id) {
    const carrito = JSON.parse(window.localStorage.getItem('carrito'))
    if (carrito.length === 0 || !existeProductoEnCarrito(id)) {
        carrito.push({id, 'cantidad': 1})
    } else {
        carrito.forEach(producto => {
            if (producto.id === id) aumentarCantidad(producto);
        })
    }
    window.localStorage.setItem('carrito', JSON.stringify(carrito))
}

function descontarProducto(id) {
    let carrito = JSON.parse(window.localStorage.getItem('carrito'))
    if (carrito.length === 0) {
        return
    } else {
        carrito.forEach((producto, index) => {
            if (producto.id === id) restarCantidad(producto);
            if (producto.cantidad <= 0) carrito = eliminarProducto(index);
        })
    }
    window.localStorage.setItem('carrito', JSON.stringify(carrito))
}