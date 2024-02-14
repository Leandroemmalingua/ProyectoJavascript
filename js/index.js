/*let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let nombreCompleto = nombre + " " + apellido
let regristado = prompt("Usted esta Registrado?ingrese si/no");

if (regristado === "si"){
    console.log("Hola" + " " + nombreCompleto + " " + "usted esta registrado")
}else{
    console.log("Usted no se encuentra registrado")
}

function elegir(){
    let menu = "Ingrese Una Opcion";
menu+= "1-hamburguesa";
menu+= "2-gaseosa";
menu+= "3-papas";
menu+= "4-salir"

let cod = 0;

do {
    cod = parseInt(prompt (menu));
    console.log("El codigo es :" + " " + cod)
    }   while (cod!=4);
}

elegir(); */


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
}
