console.log(
  "1.	Declare una variable llamada desafío y asígnele un valor inicial UTCV Tecnologías de la Información."
);
let desafio = "UTCV Tecnologías de la Información";

console.log(
  "2.	Imprima la cadena en la consola del navegador usando console.log()"
);
console.log(desafio);

console.log(
  "3.	Imprima la longitud de la cadena en la consola del navegador usando console.log()"
);
console.log("Longitud:" + desafio.length);

console.log(
  "4.	Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()"
);
console.log(desafio.toUpperCase());

console.log(
  "5.	Cambie todos los caracteres de la cadena a minúsculas usando el método toLowerCase()"
);
console.log(desafio.toLowerCase());

console.log(
  "6.	Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()"
);
console.log(desafio.substring(0, 4));

console.log(
  "7.	Corta la frase Tecnologías de la Información de UTCV Tecnologías de la Información."
);
console.log(desafio.substring(5, 16));

console.log(
  "8.	Verifique si la cadena contiene una palabra Información usando el método includes()"
);
let isInformacion = desafio.includes("Información");
console.log(desafio.includes(isInformacion));
console.log("9.	Divide la cadena en un array usando el método split()");
console.log(desafio.split(""));

console.log(
  "10.	Divida la cadena UTCV Tecnologías de la Información en el espacio usando el método split()"
);
console.log(desafio.split(" "));

console.log(
  "11.	Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon divide la cadena en la coma y cámbiala a una matriz."
);
let redes = "Facebook, Twitter, Instagram, WhatsApp";
console.log(redes.split(","));
console.log(
  "12.	Cambie UTCV Tecnologías de la Información a UTCV Tecnologías [TU GRADO Y GRUPO] usando el método replace()."
);
console.log(desafio.replace("de la Información", "3B TIDSM"));
console.log(
  "13.	¿Qué es el carácter en el índice 15 en la cadena UTCV Tecnologías de la Información ? Utilice el método charAt()."
);
console.log(desafio.charAt(15));
console.log(
  "14.	¿Cuál es el código de carácter de í en la cadena UTCV Tecnologías de la Información usando charCodeAt()"
);
console.log(desafio.charCodeAt("í"));
console.log(
  "15.	Use indexOf para determinar la posición de la primera aparición de a en UTCV Tecnologías de la Información"
);
console.log(desafio.indexOf("a"));
console.log(
  "16.	Utilice lastIndexOf para determinar la posición de la última aparición de a en UTCV Tecnologías de la Información."
);
console.log(desafio.lastIndexOf("a"));
console.log(
  "17.	Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:No puedes terminar una oración con porque porque porque es una conjunción"
);
let randomString =
  "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(randomString.indexOf("porque"));
console.log(
  "18.	Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:No puedes terminar una oración con porque porque porque es una conjunción"
);
console.log(randomString.lastIndexOf("porque"));
console.log(
  "19.	Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:No puedes terminar una oración con porque porque porque es una conjunción"
);
console.log(randomString.search("porque"));
console.log(
  "20.	Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo,  UTCV Tecnologías de la Información "
);
console.log(desafio.trim());
console.log(
  "21.	Use el método startsWith() con la cadena UTCV Tecnologías de la Información y haga que el resultado sea verdadero"
);
console.log(desafio.startsWith("UTCV"));
console.log(
  "22.	Use el método endsWith() con la cadena UTCV Tecnologías de la Información y haga que el resultado sea verdadero"
);
console.log(desafio.endsWith("Información"));
console.log(
  "23.	Usa el método match() para encontrar todos los a en UTCV Tecnologías de la Información"
);
console.log(desafio.match(/a/g));
console.log(
  "24.	Use concat() y fusione UTCV y  Tecnologías de la Información en una sola cadena,  UTCV Tecnologías de la Información"
);
let utcv = "UTCV";
let tidsm = "Tecnologías de la Información";
console.log(utcv.concat(" ", tidsm));
console.log(
  "25.	Use el método repeat() para imprimir UTCV Tecnologías de la Información 2 veces"
);
console.log(desafio.repeat(2));

//////////////////////////////////////////////////////////////////////
let cadena =
  "Este es un ejemplo de cadena para poder extraer ciertas letras y poder contarlas de acuerdo a ciertas resticciones, necesito saber cunatas letras del alfabeto existen en este texto siempre y cuando esten dentro del mismo";
let minus_cadena = cadena.toLowerCase();
let letras_cadena = minus_cadena.match(/[a-z]/g);
console.log(letras_cadena);
const counts = {};
letras_cadena.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
//////////////////////////////////////////////////////////////////////////
let arreglo = [];
let conteo = 0;
for (let i = 0; i < cadena.length - 1; i++) {
  arreglo.push(minus_cadena.charAt(i));
  if (minus_cadena.charAt(i) === minus_cadena.charAt(i + 1)) {
    conteo++;
  }
}
//////////////////////////////////////////////////////////////////////////////7

/////////////////////////////////////////////////////////////////
let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let coincidencia = [];
for (let i = 0; i < alfabeto.length; i++) {
  if (minus_cadena.match(eval("/" + alfabeto[i] + "/g")) != null) {
    coincidencia.push(
      alfabeto[i] +
        ": " +
        minus_cadena.match(eval("/" + alfabeto[i] + "/g")).length
    );
  }
}
console.log("alfabeto");
console.log(coincidencia);
eval("alert('Hola mundo')");

//////////////////////////////////////////////////////////////////////////////
