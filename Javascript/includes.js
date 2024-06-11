let tidsm = "Tecnlogias de la Informacion area Desarrollo de Software Mutliplataforma";
let isMultimedia=tidsm.includes('Multimedia');
console.log(isMultimedia);
let isSoftware=tidsm.includes('Software');
console.log(isSoftware);
console.log(tidsm.toLowerCase());
console.log(tidsm.toUpperCase());
let tidsm2=tidsm.replace('Software', 'Multimedia');

let letters = tidsm.match(/[a-zA-Z]/g);
console.log(letters);
let words = tidsm.split(" ");
console.log(words);
