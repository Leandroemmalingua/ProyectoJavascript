let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let nombreCompleto = nombre + " " + apellido
let regristado = prompt("Usted esta Registrado?ingrese si/no");

if (regristado === "si"){
    console.log("Hola" + " " + nombreCompleto + " " + "usted esta registrado")
}else{
    console.log("Usted no se encuentra registrado")
}

