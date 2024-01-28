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