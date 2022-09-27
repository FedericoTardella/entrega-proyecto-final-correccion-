const productos = []
let carrito = []

class Producto{
    constructor(nombre,precio,id,desc,img){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.desc = desc;
        this.img = img;
    }
    desplegarProducto(){
    const card = `
        <div class="tarjeta">
        <div>
            <img class="productot" src=${this.img} alt="Imagen producto">
        </div>
        <div>
            <h4>${this.nombre}</h4>
        </div>
        <div>
            <p>${this.desc}</p>
        </div>
        <div>
            <p>$${this.precio}</p>
        </div>
        <div>
        <button id=${this.id}>
            <p>Agregar al carrito</p>
        </button>
        </div>
    </div>
    `
    const container = document.getElementById('container')
    container.innerHTML += card
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => agregarAlCarrito(productoEncontrado))
        btnAgregar.onclick = mostarToast
    }
}

function mostarToast(){
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000
    }).showToast();
}

let mateStanley = new Producto ("Mate Stanley", 11500,1, "Mate Stanley de acero inoxidable, no incluye bombilla", '/assets/imagenes/mateacero.jpeg')
let mateCalabaza = new Producto ("Mate Calabaza", 9500,2, "Mate de calabaza, con borde de acero inoxidable, no incluye bombilla", '/assets/imagenes/matecalabaza.png')
let matePlasttico = new Producto ("Mate Plastico", 700,3, "Mate de plastico duro de colores, con sistema autolimpiante con bombilla de alumino", '/assets/imagenes/mateplastico.jpg')
let mateAutocebante = new Producto ("Mate Autocebante", 630,4, "Mate Autocebante de plastico de 500ml. Con tapa y bombilla", '/assets/imagenes/mateauto.jpg')
let termoStanley = new Producto ("Termo Stanley", 16999,5, "Termo Stanley de acero inoxidable de 950mlt", '/assets/imagenes/termostanley.jpg')
let termoAcero = new Producto ("Termo Acero", 3900,6, "Termo Acero Inoxidable, Marca Heizen, Con Manija, 1 Litro, Color Gris", '/assets/imagenes/termoacero.jpg')
let termoPlastico = new Producto ("Termo Plastico", 1500,7, "Termo de plástico de 1lts con pico cebador a rosca", '/assets/imagenes/termoplastico.jpg')
let termoTerere = new Producto ("Termo Terere", 3600,8, "Termo de plastico de 2,5lts, para bebidas frias", '/assets/imagenes/termoterere.jpg')
let bombillaEspiral = new Producto ("Bombilla Espiral", 300,9, "Termo de plastico de 2,5lts, para bebidas frias", '/assets/imagenes/bombillaespiral.jpg')
let bombillaMetal = new Producto ("Bombilla Metal", 400,10,"Bombilla de metal", '/assets/imagenes/bombillametal.jpg')
let bombillaAlpaca = new Producto ("Bombilla Alpaca", 900,11, "Bombilla de Alpaca", '/assets/imagenes/bombillapicoloro.png')
let bombillaPlana = new Producto ("Bombilla Plana", 900,12, "Bombilla plana de Aluminio", '/assets/imagenes/bombillaplana.jpg')

productos.push (mateStanley, mateCalabaza, matePlasttico, mateAutocebante, termoStanley, termoAcero, termoPlastico, termoTerere, bombillaAlpaca, bombillaEspiral, bombillaPlana, bombillaMetal)

productos.forEach(e => {
    e.desplegarProducto()
})
productos.forEach(e => {
    e.agregarEvento()
})

function agregarAlCarrito(producto) {
    
    const enCarrito = carrito.find(prod => prod.id == producto.id)

    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id) 
        carrito = [
            ...carritoFiltrado,
            {...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
    }
    
    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
//reduce para acumular
