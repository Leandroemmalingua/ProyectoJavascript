
const productos = [
    {id:1, nombre:"Hamburguesa con Queso", precio:2500},
    {id:2, nombre:"Hamburguesa Completa", precio:2800},
    {id:3, nombre:"Hamburguesa de Pollo", precio:2400},
    {id:4, nombre:"Hamburguesa Cheddar y Panceta", precio:3100},
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const elementosCarrito = [];
const contenedorProductos = document.getElementById('productos');
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');


function renderizarProductos(){
    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src="${producto.img}" alt="">
        <p>${producto.precio + "$"}</p>        
        <button class="btn-agregar-carrito" data-id="${producto.id}">Sumar Producto</button> 
        `;
        contenedorProductos.appendChild(div);
        
    })
}

function agregarAlCarrito(idProducto){
    const itemExistente = elementosCarrito.find(item => item.id === idProducto);
    if(itemExistente){
        itemExistente.cantidad++
    }else{
        const producto = productos.find(p => p.id === idProducto);
        if(producto){
            elementosCarrito.push({...producto, cantidad:1});

        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
}

function eliminarDelCarrito(idProducto){
    const indice = elementosCarrito.findIndex(item => item.id === idProducto);
    if(indice !== -1){
        elementosCarrito.splice(indice, 1);
        renderizarCarrito();
    }
}

function renderizarCarrito() {
    contenedorElementosCarrito.innerHTML = '';
    let precioTotal = 0;
    elementosCarrito.forEach(item =>{
            const li = document.createElement('li');
            li.textContent = `${item.nombre} x ${item.cantidad}  - $${item.precio * item.cantidad};`
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'eliminar';
            btnEliminar.addEventListener('click', () => eliminarDelCarrito(item.id))
            li.appendChild(btnEliminar);
            contenedorElementosCarrito.appendChild(li);
            precioTotal += item.precio * item.cantidad;
    })
    totalSpan.textContent = precioTotal;
}
;
function realizarCompra(){
    Swal.fire({
        title: "Compra Realizada",
        text: "Gracias Por Elegirnos",
    });
    elementosCarrito.length = 0;
    renderizarCarrito();
}

document.getElementById('boton-comprar').addEventListener('click',realizarCompra);

contenedorProductos.addEventListener('click',function(evento){
    if(evento.target.classList.contains('btn-agregar-carrito')){
            const idProducto = parseInt(evento.target.getAttribute('data-id'));
            agregarAlCarrito(idProducto);
        }
        });

renderizarProductos();

const mensaje = "Gracias Por Elegirnos Una Vez Mas";
const mensajeDos = document.getElementById("cartel");
let indice = 0;

function mostrarLetras(){
    mensajeDos.textContent += mensaje[indice];
    indice++;
    if(indice < mensaje.length){
        setTimeout(mostrarLetras, 300)
    }
}

setTimeout(mostrarLetras,1000);
