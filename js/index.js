/*
const header = document.getElementById('header')
console.log(header)

class Producto {
        constructor (id,nombre,descripcion,imagen,precio,){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        }
	}

let carrito = []

const productos = [
    new Producto ("1","Hamburguesa con JyQ","MedallondeCarne+Jamon+Queso","url","1500"),
    new Producto ("2","Hamburguesa Completa","MedallondeCarne+Jamon+Queso+Lechuga+Tomate","url","1800"),
    new Producto ("3","Hamburguesa Cochina","MedallondeCarne+Cheddar+HuevoFrito","url","1900"),
    new Producto ("4","Hamburguesa Baccon","MedallondeCarne+Cheddar+Baccon","url","2100"),
    new Producto ("5","Hamburguesa Crispy","MedallondePollo+Lechuga+Tomate+Jamon+Queso","url","1600")
]

const contenedorProductos = document.getElementById("grilla-productos");

function listadoProductos(productos){
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                            <h2>"${producto.nombre}"</h2>
                            <h3>"${producto.descripcion}"</h3>
                            <img src="${producto.imagen}" alt="">
                            <p>precio:$ ${producto.precio}</p>
                            `
        contenedorProductos.appendChild(card);
    });
}

listadoProductos(productos);

let seleccion = prompt("Hola desea realizar una compra? si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Porfavor ingresa si o no")
    seleccion = prompt("Desea realizar una compra? si o no")
}

if (seleccion == "si"){
    alert("A continuacion podra elegir de nuestra lista")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todosLosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("gracias por elegirnos, hasta luego")
}

while (seleccion != "no"){
    let producto = prompt("Agrega otro producto a tu carrito")
    let precio = 0
    if (producto == "Hamburguesa con JyQ" || producto == "Hamburguesa Completa" || producto == "Hamburguesa Cochina" || producto == "Hamburguesa Baccon" || producto == "Hamburguesa Crispy" ){
        switch(producto) {
            case "Hamburguesa con JyQ":
            precio = 1500;
            break;
            case "Hamburguesa Completa":
            precio = 1800;
            break;
            case "Hamburguesa Cochina":
            precio = 1900;
            break;
            case "Hamburguesa Baccon":
            precio = 2100;
            break;
            case "Hamburguesa Crispy":
            precio = 1600;
            break;
        default:
            break;
        }
    
    let cantidad = parseInt(prompt("Cuantas unidades desea Comprar?"))
    
    carrito.push({producto, cantidad, precio})
    console.log(carrito);
    } else {
        alert ("No disponible")
    }

    seleccion = prompt("Desea agregar Algo mas?")

    while (seleccion === "no"){
        alert("Gracias por su compra")
        carrito.forEach((compraFinal) => {
            console.log(`producto: ${compraFinal.producto}, unidades: ${compraFinal.cantidad}, total a pagar: ${compraFinal.cantidad * compraFinal.precio}`)
        })
    break;
    }
}*/

const productos = [

    {id:1 , nombre: "Hamburguesa con Queso", imagen: "https://placehold.co/600x400", precio: 2000},
    {id:2 , nombre: "Hamburguesa con Lechuga y Tomate", imagen: "https://placehold.co/600x400" , precio: 2200},
    {id:3 , nombre: "Hamburguesa con Cheddar y Panceta", imagen: "https://placehold.co/600x400", precio: 2400},
    {id:4 , nombre: "Hamburguesa Completa", imagen: "https://placehold.co/600x400" , precio: 2800}
    ]

let cantidadProductosComprados = 0;

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarIconoCarrito() {
    const iconoCarrito = document.getElementById("cantidad-productos");
    if (iconoCarrito){
        iconoCarrito.textContent = cantidadProductosComprados;
    }
}

function listadoProductos(){
    const contenedorProductos = document.getElementById("item-carrito");
    contenedorProductos.innerHTML = "";

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.textContent = producto.nombre;
    });
    contenedorProductos.appendChild(item);
}

function cardsProductos(){
    const contenedor = document.getElementById("grilla-productos");

    productos.forEach(producto =>{
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.classList.add("imagen-producto");

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;
        nombre.classList.add("nombre-producto");
        tarjeta.appendChild(nombre);

        const precio = document.createElement("p")
        precio.textContent = producto.precio;
        precio.classList.add("precio-producto");
        tarjeta.appendChild(precio);

        const botonCompra = document.createElement("button");
        botonCompra.textContent = "agregar producto";
        botonCompra.classList.add("boton-compra");
        botonCompra.addEventListener("click", () =>{
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            cantidadProductosComprados++;
            actualizarIconoCarrito();
            listadoProductos();
        })

        tarjeta.appendChild(botonCompra);

        contenedor.appendChild(tarjeta);

    })
}

cardsProductos();

actualizarIconoCarrito();

listadoProductos();