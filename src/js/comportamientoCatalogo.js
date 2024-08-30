function loadPictures() {
    dataProductos.forEach((picture) => {
        const catalogo = document.getElementById('productos');
        catalogo.innerHTML += `
            <div class="uk-card uk-card-hover uk-card-body product">
                <img loading="lazy" src="${picture.src}" alt="${picture.title}">
                <h3 class="uk-card-title">${picture.title}</h3>
                <p class="description">${picture.description}</p>
                <p id="price">$ ${numeroAPrecio(picture.price)}</p>
                ${renderCounter(picture)}
            </div>
      `;
    });
}

function renderCounter(picture) {
    return `
        <div class"uk-flex">
            <span class="icon-cart" id="minus-cart-${picture.id}" uk-icon="minus"></span>
            <span class="amount-cart-item" id="amount-cart-item-${picture.id}">${cantidadDeProducto(picture.id)}</span>
            <span class="icon-cart" id="add-cart-${picture.id}" uk-icon="plus"></span>
        </div>
    `;
}

function addEventsToUpdateCart() {
    dataProductos.forEach((product) => {
        const plusButton = document.getElementById(`add-cart-${product.id}`)
        const minusButton = document.getElementById(`minus-cart-${product.id}`)
        const amountValue = document.getElementById(`amount-cart-item-${product.id}`)
        plusButton.addEventListener('click', () => {
            amountValue.innerText = `${(parseInt(amountValue.innerText) + 1)}`
            agregarProducto(product.id)
        });
        minusButton.addEventListener('click', () => {
            const currentValue = parseInt(amountValue.innerText);
            if (currentValue > 0) amountValue.innerText = `${currentValue - 1}`;
            descontarProducto(product.id)
        });
    });
}

loadPictures();
addEventsToUpdateCart();
