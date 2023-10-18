const dataProductos = [
    {
        src: "../../imagenes/catalogo/despojadorChico.jpg",
        title: "Despojadores de biju",
        description: "Chico",
        price: "2000"
    },
    {
        src: "../../imagenes/catalogo/despojadorGrande.jpg",
        title: "Despojadores de biju",
        description: "Grande",
        price: "2500"
    },
    {
        src: "../../imagenes/catalogo/portaSaumerios.jpg",
        title: "Manito de Fátima",
        description: "Porta saumerios",
        price: "1500"
    },
    {
        src: "../../imagenes/catalogo/posaVaso.jpg",
        title: "Posa vaso",
        description: "Efecto mármol",
        price: "2000"
    },
    {
        src: "../../imagenes/catalogo/bandejaDeTerrazo.jpg",
        title: "Bandejas de Terrazo oval",
        description: "Varios colores - 18cm",
        price: "4500"
    },
    {
        src: "../../imagenes/catalogo/bandejaDeTerrazoGrande.jpg",
        title: "Bandejas de Terrazo",
        description: "Para mesa - 19cm",
        price: "8000"
    },
    {
        src: "../../imagenes/catalogo/bandejaDeTerrazoConChispas.jpg",
        title: "Bandejas de Terrazo",
        description: "Con chispas de terrazo - 18cm",
        price: "4700"
    },
    {
        src: "../../imagenes/catalogo/portaVela.jpg",
        title: "Porta Vela",
        description: "Varios colores",
        price: "1700"
    },
    {
        src: "../../imagenes/catalogo/banioCompleto.jpg",
        title: "SET de Baño Completo",
        description: "Bandeja - Porta vela - Dispenser de jabón líquido",
        price: "10000"
    },
    {
        src: "../../imagenes/catalogo/comboBanio.jpg",
        title: "Combo de Baño",
        description: "Bandeja - Dispenser de jabón líquido",
        price: "7000"
    },
    {
        src: "../../imagenes/catalogo/dispenserJabon.jpg",
        title: "Dispenser de jabón líquido",
        description: "Terrazo",
        price: "5000"
    },
    {
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
            </div>
      `;
    });
}

loadPictures();