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
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="${producto.src}" alt="" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">${producto.title}</h3>
                        <p>${producto.description}</p>
                        <p>${producto.price}</p>
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
