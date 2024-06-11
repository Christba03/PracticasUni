let nombre = 'Christian Barragan Paez';
let fecha = '1998-03-01';
let palabra = 'hawaiano';
let especial='!@#$%^&*()_+[]{}|;:,.<>?';
let randomPassword = '';

//obtener solo las letras del nombre
let letters_name = nombre.match(/[a-zA-Z]/g);
console.log(letters_name);
//obtener solo los numeros de la fecha
let numbers_date = fecha.match(/\d/g);
console.log(numbers_date);
//obtener solo las letras de la palabra
let letters_palabra = palabra.match(/[a-zA-Z]/g);
console.log(letters_palabra);

// numeros al azar de fecha
let randomNumbers = [];
for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * numbers_date.length);
    randomNumbers.push(numbers_date[randomIndex]);
}
// letras al azar de nombre y palabra
let randomLetters = [];
for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * letters_palabra.length);
    randomLetters.push(letters_palabra[randomIndex].toUpperCase());
}

for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * letters_name.length);
    randomLetters.push(letters_name[randomIndex]);
}
// simbolos al azar
let randomSpecialChars = [];
for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * especial.length);
    randomSpecialChars.push(especial[randomIndex]);
}

// combine randomNumbers, randomLetters, and randomSpecialChars to form the password
let passwordArray = randomNumbers.concat(randomLetters, randomSpecialChars);
randomPassword = passwordArray.join('');
console.log(randomPassword);

// randomize randomPassword
let randomizedPassword = randomPassword.split('').sort(() => Math.random() - 0.5).join('');
console.log(randomizedPassword);

