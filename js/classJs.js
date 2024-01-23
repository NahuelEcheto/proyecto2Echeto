class Carrito {
    constructor(carroCompra) {
        this.carrito = carroCompra
    }
    sumaTotal() {
        if(this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, comidas)=> acumulador + comidas.precio, 0)
        }
    }
}