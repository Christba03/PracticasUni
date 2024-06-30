
function validarEspacios(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if(numero1=="" || numero2==""){
        alert("Debe ingresar los dos números");
        return;
    }
}
function validarEnteros(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if(numero1 % 1 != 0 || numero2 % 1 != 0){
        alert("Debe ingresar números enteros");
        return;
    }
}

function soloEnteros(e,field){
    const key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
    if (key === 8){
        return true;
    }
    if (key < 48 || key > 57){
        return false;
    }

    
}
function SoloPaste(e,field){
    const key = e.keyCode ? e.keyCode : e.which;
    if (e.ctrlKey && (key === 86)) {
        return false;
    }
}
function generarTabla() {
  let numeroMultiplicar = document.getElementById("numero1").value;
  let numeroVeces = document.getElementById("numero2").value;
  let resultadoDiv = document.getElementById("resultado");
  let resultadoHtml='';
    validarEspacios();
    validarEnteros();
    for (let i = 1; i <= numeroVeces; i++) {
        resultadoHtml += '<p style="color:green">'+numeroMultiplicar+ ' x ' +i + ' = ' + (numeroMultiplicar * i )+ '</p>';
         
    }
 
  resultadoDiv.innerHTML = resultadoHtml;
  console.log(resultadoHtml);
}

function limpiar() {
    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value = '';
    document.getElementById("resultado").innerHTML = '';
}


