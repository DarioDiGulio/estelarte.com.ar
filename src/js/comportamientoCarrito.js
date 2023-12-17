function renderProductos() {
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    const items = document.getElementById('items')
    if (carrito.length === 0) {
        renderEmptyChart(items)
        return
    }
    carrito.forEach(item => {
        const producto = dataProductos.find(product => product.id === item.id)
        items.innerHTML += `
            <div class="uk-card uk-card-default uk-child-width-1-2@s uk-margin uk-padding-small" uk-grid>
                <div class="uk-cover-container">
                    <img src="${producto.src}" alt="" class="producto" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div class="carrito-txt-container">
                    <div class="uk-card-body">
                        <h3 class="uk-card-title carrito-titulo">${producto.title}</h3>
                        <p class="carrito-descripcion">${producto.description}</p>
                        <p>$ ${numeroAPrecio(producto.price)}</p>
                        <spam class="carrito-cantidad">${cantidadDeProducto(producto.id)}</spam>
                    </div>
                </div>
            </div>
        `
    })
}

function renderEmptyChart(items) {
    items.innerText = 'Vacío'
}

renderProductos()
