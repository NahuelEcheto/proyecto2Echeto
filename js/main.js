const carrito = []

const comidas = [{codigo: 1, nombre: "Hamburguesa completa con papas fritas", imagen: "🍔", precio: 2000},
                 {codigo: 2, nombre: "Hamburguesa completa con ensalada", imagen: "🍔", precio: 1800},
                 {codigo: 3, nombre: "Hamburguesa completa", imagen: "🍔", precio: 1400},
                 {codigo: 4, nombre: "Pizza con muzzarella", imagen: "🍕", precio: 1950},
                 {codigo: 5, nombre: "Pizza especial", imagen: "🍕", precio: 2250},
                 {codigo: 6, nombre: "Pizza napolitana", imagen: "🍕", precio: 2700},
                 {codigo: 7, nombre: "Empanadas de carne", imagen: "🥟", precio: 3000},
                 {codigo: 8, nombre: "Empanadas de jamón y queso", imagen: "🥟", precio: 3200},
                 {codigo: 9, nombre: "Empanadas de pollo", imagen: "🥟", precio: 3400}]

function buscarCodigo(codigo) {
    let comidaElegida = comidas.find((comida)=> comida.codigo === parseInt(codigo))
    return comidaElegida
}

function pedirComida() {
    let codigoComida = prompt("Ingresar código: ")
    let eleccionDeComida = buscarCodigo(codigoComida) 

    if(eleccionDeComida === undefined) {
        alert("Código invalido")
    } else {
        carrito.push(eleccionDeComida)
        alert(eleccionDeComida.nombre + " se agrego al carrito.")
        let seguirComprando = confirm("¿Desea seguir comprando?")
        if(seguirComprando === true) {
            pedirComida()
        }

        finalizarPedido()
    }
}                 

function finalizarPedido() {
    console.clear()
    const changuito = new Carrito(carrito)
    let precioTotal = changuito.sumaTotal()

    console.log("El costo total de la compra es de: $ " + precioTotal)
    console.log("Gracias por su compra. Que lo disfrute!!")
}