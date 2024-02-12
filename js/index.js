let nombre = prompt("Ingrese su Nombre");
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

elegir();


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


const productosArray = [
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

listadoProductos(productosArray);



