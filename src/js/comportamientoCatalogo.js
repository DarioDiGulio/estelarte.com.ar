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

function loadPictures() {
    dataProductos.forEach((picture) => {
        const catalogo = document.getElementById('productos');
        catalogo.innerHTML += `
            <div class="uk-card uk-card-hover uk-card-body">
                <img loading="lazy" src="${picture.src}" alt="${picture.title}">
                <h3 class="uk-card-title">${picture.title}</h3>
                <p>${picture.description}</p>
                <p id="price">$ ${picture.price}</p>
                <div class"uk-flex">
                    <span class="icon-cart" id="minus-cart-${picture.id}" uk-icon="minus"></span>
                    <span class="amount-cart-item" id="amount-cart-item-${picture.id}">0</span>
                    <span class="icon-cart" id="add-cart-${picture.id}" uk-icon="plus"></span>
                </div>
            </div>
      `;
    });
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

const toCartButton = document.getElementById('to-cart');
toCartButton.addEventListener('click', () => window.location.replace('carrito.html'))
