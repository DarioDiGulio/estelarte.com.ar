const dataCuadros = [
    {
        id: "viejo",
        url: "url('imagenes/viejo.png')",
        title: "Don José",
        description: "La vejez empieza cuando perdemos la curiosidad.",
    },
    {
        id: "bandera",
        url: "url('imagenes/bandera.png')",
        title: "Argentina",
        description: "Cielo, azul y cielo.",
    },
    {
        id: "elefante",
        url: "url('imagenes/elefante.png')",
        title: "Tembo",
        description: "Mi segunda obra año 2005.",
    },
    {
        id: "tango",
        url: "url('imagenes/tango.png')",
        title: "Caminito",
        description: "Obra donada.",
    },
    {
        id: "aguila",
        url: "url('imagenes/aguila.png')",
        title: "El Vuelo",
        description:
            "Porque ir andando, si puedes volar. Vuela hasta volvernos a encontrar.",
    },
    {
        id: "buho",
        url: "url('imagenes/buho.png')",
        title: "Al asecho",
        description: "Espera calma y sigilosa.",
    },
    {
        id: "paisaje",
        url: "url('imagenes/paisaje.png')",
        title: "Desde el faro",
        description: "Cuanto más te miro más te creo.",
    },
    {
        id: "avenida",
        url: "url('imagenes/avenida.png')",
        title: "Buenos Aires",
        description: "Las luces de mi ciudad, esperan siempre allí.",
    },
    {
        id: "uruguay",
        url: "url('imagenes/uruguay.png')",
        title: "Silencio",
        description:
            "Historias de pinceles. Viajando por las playas de Uruguay el paisaje me encontró, y entonces se lo conté al lienzo que esperaba teñirse de color.",
    },
    {
        id: "madre",
        url: "url('imagenes/madre.png')",
        title: "Desde el Alma",
        description:
            "No hay cielo tan puro como tu voz, no hay mar tan profundo como tu mirada y no hay sabio tan sabio que me enseñe lo que has venido a enseñarme tu hijo mío. Gracias a D.DG.",
    },
    {
        id: "caballo",
        url: "url('imagenes/caballo.png')",
        title: "Lucero",
        description:
            "Aunque el frio queme, aunque el miedo muerda, aunque el sol se esconda.",
    },
    {
        id: "louis",
        url: "url('imagenes/louis.png')",
        title: "Mundo maravilloso",
        description:
            "Veo cielos de color azul, y nubes de color blanco. El brillante bendecido día, la oscura sagrada noche, y pienso para mí... qué mundo tan maravilloso.",
    },
    {
        id: "tigre",
        url: "url('imagenes/tigre.png')",
        title: "Miradas",
        description:
            "Historias de pinceles : Un día alguien me dijo: 'Me gustaría ver esta imagen pintada en grande para poderla contemplar día tras dia'. Así es como surgió Miradas.",
    },
    {
        id: "estela",
        url: "url('imagenes/estela.jpg')",
        title: "Miradas",
        description:
            "Técnica: arte figurativo con acrilico. Medias: 50x80. Año: 2018",
    },
    {
        id: "mane",
        url: "url('imagenes/marianela.jpg')",
        title: "Marianela",
        description: "Obra expuesta en el Carrusel del Louvre año 2019",
    },
    {
        id: "jazz",
        url: "url('imagenes/jazz.jpg')",
        title: "Jazz",
        description: "En homenaje a mis queridos amigos Julieta y Mario.",
    },
    {
        id: "patines",
        url: "url('imagenes/patines.jpg')",
        title: "Soñando sobre ruedas",
        description: "tec acrilico sobre carton entelado medidas 45x60 año 2006",
    },
    {
        id: "anju",
        url: "url('imagenes/anju.png')",
        title: "Anju",
        description: "No busques con los ojos lo que puedes ver con el corazón.",
    },
    {
        id: "abstract1",
        url: "url('imagenes/abstract1.png')",
        title: "Abstracto",
        description: "Abstracto con textura.",
    },
    {
        id: "crisol",
        url: "url('imagenes/crisol.png')",
        title: "Crisol",
        description: "Un lugar, un recuerdo en el tiempo.",
    },
    {
        id: "paleta",
        url: "url('imagenes/abstract2.png')",
        title: "Desde la pleta",
        description: "Técnica abstracto con acrilico medidas 80x80 año 2018",
    },
    {
        id: "abstract3",
        url: "url('imagenes/abstract3.png')",
        title: "Abstracto",
        description: "2019",
    },
    {
        id: "infinito",
        url: "url('imagenes/infinito.jpg')",
        title: "Abstracto",
        description:
            "¿Sabías que en la cultura quechua el color azul representa el infinito? (araxa- pacha).",
    },
    {
        id: "paris",
        url: "url('imagenes/paris.jpg')",
        title: "París",
        description: "Del caos a la calma . Obra escencialista",
    },
    {
        id: "renacer",
        url: "url('imagenes/renacer.png')",
        title: "Renacer",
        description: "tec arte figurat con acrilico medidas 60x60 año 2016",
    },
    {
        id: "refugio",
        url: "url('imagenes/refugio.png')",
        title: "El refugio",
        description: "tec oleo con pincel seco en madera medidas 60x75 año 2005",
    },
    {
        id: "pasteles1",
        url: "url('imagenes/pasteles1.png')",
        title: "Ensueño I",
        description: "Serie de cuadros pintados con pasteles.",
    },
    {
        id: "pasteles2",
        url: "url('imagenes/pasteles2.png')",
        title: "Ensueño II",
        description: "Serie de cuadros pintados con pasteles.",
    },
    {
        id: "expo1",
        url: "url('imagenes/expo1.png')",
        title: "Exposición en Buenos Aires",
        description: "2014",
    },
    {
        id: "expo2",
        url: "url('imagenes/expo2.png')",
        title: "Exposición en París",
        description: "2019",
    },
    {
        id: "calas",
        url: "url('imagenes/calas.png')",
        title: "Calas",
        description: "No dejes que le de sed al árbol del que eres sol. FK.",
    },
    {
        id: "sobrevolando",
        url: "url('imagenes/sobrevolando.png')",
        title: "Sobrevolando",
        description: "Técnica óleo 70x45",
    },
    {
        id: "esperanza",
        url: "url('imagenes/esperanza.png')",
        title: "Esperanza",
        description: "Escencialismo óleo 70x45",
    },
    {
        id: "enpedazos",
        url: "url('imagenes/enpedazo.png')",
        title: "En pedazos",
        description: "Escencialismo óleo 70x45",
    },
    {
        id: "cristales",
        url: "url('imagenes/cristales.png')",
        title: "Cristales",
        description: "Escencialismo óleo 70x45",
    },
    {
        id: "enaciendo",
        url: "url('imagenes/renaciendo.png')",
        title: "Renaciendo",
        description: "Técnica acrílico fantasía 60 x45",
    },
    {
        id: "pandemia",
        url: "url('imagenes/pandemia.png')",
        title: "Pandemia",
        description: "Escencialismo óleo 70x45",
    },
    {
        id: "nubes",
        url: "url('imagenes/nubes.png')",
        title: "Nubes",
        description: "Óleo 75x60 Abstracto",
    },
    {
        id: "estallido",
        url: "url('imagenes/estallido.png')",
        title: "Estallido",
        description: "70x45 Óleo escencialismo",
    },
];

function cargarModal(cuadro) {
    let dataCuadro = searchPicture(cuadro);
    document.getElementById("title_modal").innerHTML = dataCuadro.title;
    document.getElementById("description_modal").innerHTML =
        dataCuadro.description;
    document.getElementById("image_modal").style.backgroundImage = dataCuadro.url;
}

function searchPicture(idCuadro) {
    return dataCuadros.find(cuadro => cuadro.id === idCuadro);
}
