
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
        contenedorProductos.appendChild(item);
    });
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