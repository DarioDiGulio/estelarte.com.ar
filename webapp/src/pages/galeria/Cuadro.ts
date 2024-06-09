export interface Cuadro {
    src: string
    title: string
    description: string
}

export interface Category {
    id: string
    title: string
    items: Cuadro[]
}