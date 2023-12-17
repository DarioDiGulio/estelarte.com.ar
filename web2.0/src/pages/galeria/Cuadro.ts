export interface Cuadro {
    src: string
    alt: string
}

export interface Category {
    id: string
    title: string
    items: Cuadro[]
}