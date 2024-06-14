/*Generar una contraseña que
por lo menos tenga 8 caracteres
por lo menos 1 numero
por lo menos 1 letra
por lo menos un cracter especial
que la cadena no tenga caracteres adyacentes iguales
 */

let nombre = "Christian Barragan Paez";
let fecha = "1998-03-01";
let palabra = "palabra clave";
let especial = "!@#$%^&*()_+[]{}|;:,.<>?";
let password = "";

let nombreSinEspacios = nombre.replace(/ /g, "");
let fechaSinGuiones = fecha.replace(/-/g, "");
let auxiliar = "";
let caracter = "";
let validpassword = "";

let randomNombre = 0;
let randomFecha = 0;
let randomPalabra = 0;
let randomEspecial = 0;


generarTodosLosRandoms();
password =
  password +
  nombreSinEspacios[randomNombre] +
  fechaSinGuiones[randomFecha] +
  palabra[randomPalabra] +
  especial[randomEspecial];
generarTodosLosRandoms();
password =
  password +
  nombreSinEspacios[randomNombre] +
  fechaSinGuiones[randomFecha] +
  palabra[randomPalabra] +
  especial[randomEspecial];

for (let i = 0; i < password.length; i++) {
  if (i == 0) {
    validpassword = validpassword + password[i];
    caracter = password[i];
  } else {
    if (caracter == password[i]) {
      generarTodosLosRandoms();
      validpassword = validpassword + especial[randomEspecial];
      caracter = validpassword[i];
    } else {
      validpassword = validpassword + password[i];
      caracter = validpassword[i];
    }
  }
}

console.log(password);
console.log(validpassword);

function obtenerRandom(max) {
  return Math.floor(Math.random() * parseInt(max));
}

function generarTodosLosRandoms() {
  randomNombre = obtenerRandom(nombreSinEspacios.length);
  randomFecha = obtenerRandom(fechaSinGuiones.length);
  randomPalabra = obtenerRandom(palabra.length);
  randomEspecial = obtenerRandom(especial.length);
}
