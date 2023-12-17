import viejo from "./images/hiperrealismo/viejo.png";
import aguila from "./images/hiperrealismo/aguila.png";
import elefante from "./images/hiperrealismo/elefante.png";
import tango from "./images/hiperrealismo/tango.png";
import madre from "./images/hiperrealismo/madre.png";
import paris from "./images/escencialismo/paris.jpg";
import desnudo from "./images/figurativo/desnudo.jpeg";
import estela from "./images/figurativo/estela.jpg";
import jazz from "./images/figurativo/jazz.jpg";
import marianela from "./images/figurativo/marianela.jpg";
import patines from "./images/figurativo/patines.jpg";
import renacer from "./images/figurativo/renacer.jpg";
import infinito from "./images/abstract/infinito.jpg";
import abstract1 from "./images/abstract/abstract1.png";
import abstract2 from "./images/abstract/abstract2.png";
import crisol from "./images/abstract/crisol.png";
import { Category } from "./Cuadro";

export const categories: Category[] = [
    {
        id: 'Hiperrealismo',
        title: 'Hiperrealismo',
        items: [
            {src: viejo, alt: 'Don José'},
            {src: aguila, alt: 'Águila'},
            {src: elefante, alt: 'Tembo'},
            {src: tango, alt: 'Tango'},
            {src: madre, alt: 'Madre'},
        ]
    },
    {
        id: 'Escencialismo',
        title: 'Escencialismo',
        items: [
            {src: paris, alt: 'París'},
        ]
    },
    {
        id: 'ArteFigurativo',
        title: 'Arte Figurativo',
        items: [
            {src: desnudo, alt: 'Desnudo'},
            {src: estela, alt: 'Estela'},
            {src: jazz, alt: 'Jazz'},
            {src: marianela, alt: 'Marianela'},
            {src: patines, alt: 'Patines'},
            {src: renacer, alt: 'Renacer'},
        ]
    },
    {
        id: 'Abstracto',
        title: 'Abstracto',
        items: [
            {src: abstract1, alt: 'abstract1'},
            {src: abstract2, alt: 'abstract2'},
            {src: crisol, alt: 'Crisol'},
            {src: infinito, alt: 'Infinito'},
        ]
    },
]