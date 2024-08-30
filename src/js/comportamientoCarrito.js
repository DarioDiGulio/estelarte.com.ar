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
                        <p class="carrito-cantidad">${cantidadDeProducto(producto.id)}</p>
                    </div>
                </div>
            </div>
        `
    })
    const whatsappButton = document.getElementById('hacerPedido')
    whatsappButton.addEventListener('click', () => {
        window.open(whatsAppMessage(carrito), '_blank');
        reset();
        location.pathname = 'src/views/catalogo.html';
    })
}

function whatsAppMessage(products) {
    let base = 'https://api.whatsapp.com/send?phone=541158451062&text=Hola! Quiero hacerte un pedido del catálogo.\n'
    products.forEach(producto => {
        base += `* ${producto.id} - ${producto.cantidad}\n`  
    })
    return encodeURI(base);
}

function renderEmptyChart(items) {
    items.innerText = 'Vacío'
}

renderProductos()
