const dataProductos = [
    {
        id: "Despojadores de biju chico",
        src: "../../imagenes/catalogo/despojadorChico.jpg",
        title: "Despojadores de biju - Shell",
        description: "Hechos con resina ecológica acrílica - Tamaño Chico",
        price: "5000"
    },
    {
        id: "Despojadores de biju grande",
        src: "../../imagenes/catalogo/despojadorGrande.jpg",
        title: "Despojadores de biju - Ginkgo biloba",
        description: "Hechos con resina ecológica acrílica - Tamaño Grande",
        price: "7500"
    },
    {
        id: "Manito de Fátima",
        src: "../../imagenes/catalogo/portaSaumerios.jpg",
        title: "Porta saumerio - Manito de Fátima",
        description: "Hechos con resina ecológica acrílica patinados",
        price: "4000"
    },
    {
        id: "Posa vaso",
        src: "../../imagenes/catalogo/posaVaso.jpg",
        title: "Posa vaso",
        description: "Con efecto mármol realizado en resina ecológica acrílica",
        price: "5000"
    },
    {
        id: "Bandejas de Terrazo oval",
        src: "../../imagenes/catalogo/bandejaDeTerrazo.jpg",
        title: "Bandeja oval marmolada",
        description: "Hecha con resina ecológica acrílica - 18cm - varios colores",
        price: "8000"
    },
    {
        id: "Bandejas de Terrazo grande",
        src: "../../imagenes/catalogo/bandejaDeTerrazoGrande.jpg",
        title: "Bandeja redonda de Terrazo",
        description: "Realizada en cemento con técnica de terrazo - chispas negras - 19cm",
        price: "10000"
    },
    {
        id: "Bandejas de Terrazo con chispas",
        src: "../../imagenes/catalogo/bandejaDeTerrazoConChispas.jpg",
        title: "Bandeja oval de Terrazo",
        description: "Hecha con resina ecológica acrílica con chispas de terrazo - 18cm",
        price: "8000"
    },
    {
        id: "Porta Vela",
        src: "../../imagenes/catalogo/portaVela.jpg",
        title: "Porta Vela",
        description: "Hecha con resina ecológica acrílica - efecto mármol - varios colores",
        price: "5000"
    },
    {
        id: "Difusor Aromatico",
        src: "../../imagenes/catalogo/difusorAromatico.jpeg",
        title: "Difusor Aromático",
        description: "Difusor de resina ecológica acrílica con palitos",
        price: "23000"
    },
    {
        id: "SET de Baño Completo",
        src: "../../imagenes/catalogo/banioCompleto.jpg",
        title: "SET de Baño",
        description: "Bandeja + Porta vela + Dispenser de jabón líquido - Hecha con resina ecológica acrílica",
        price: "30000"
    },
    {
        id: "Combo de Baño",
        src: "../../imagenes/catalogo/comboBanio.jpg",
        title: "Combo de Baño",
        description: "Bandeja + Dispenser de jabón líquido - Hecha con resina ecológica acrílica",
        price: "25000"
    },
    {
        id: "Dispenser de jabón líquido",
        src: "../../imagenes/catalogo/dispenserJabon.jpg",
        title: "Dispenser de jabón líquido",
        description: "Hecha con resina ecológica acrílica",
        price: "20000"
    },
    {
        id: "Mesa pua",
        src: "../../imagenes/catalogo/mesaPua.jpg",
        title: "Mesa pua",
        description: "70 x 50cm - Resina epoxi - Efecto mármol",
        price: "60000"
    },
]

function init() {
    const carrito = JSON.parse(window.localStorage.getItem('carrito'))
    if (!carrito) {
        window.localStorage.setItem('carrito', JSON.stringify([]))
    }
}

function reset() {
    window.localStorage.setItem('carrito', JSON.stringify([]))
}

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

function obtenerProducto(id) {
    const carrito = JSON.parse(window.localStorage.getItem('carrito'))
    const filter = carrito.filter(producto => producto.id === id)
    if (filter.length === 1) return filter[0]
    return {}
}

function cantidadDeProducto(id) {
    const producto = obtenerProducto(id)
    if (producto.cantidad) return producto.cantidad
    return 0
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

init()