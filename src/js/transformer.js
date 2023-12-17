function numeroAPrecio(numero) {
    let resultado = ''
    let vueltas = 0
    for (let i = numero.length - 1; i >= 0; i--) {
        vueltas++
        if (vueltas % 3 === 0) {
            resultado = `.${numero[i]}${resultado}`
        } else {
            resultado = `${numero[i]}${resultado}`
        }
    }
    return resultado
}