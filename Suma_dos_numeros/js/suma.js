function operaciones(operacion){
    let numero1 = $("#numero1").val();
    let numero2 = $("#numero2").val();
    let resultado = 0;
    switch(operacion){
        case '+':
            resultado =sumar(numero1,numero2);
            break;
        case '-':
            resultado =restar(numero1,numero2);
            break;
        case '*':
            resultado =multiplicar(numero1,numero2);
            break;
        case '/':
            resultado =dividir(numero1,numero2);
            break;

    }
    $('#resultado').html(resultado);
}
function sumar(numero1,numero2) {
    return parseFloat(numero1) + parseFloat(numero2);
}
function restar(numero1,numero2) {
    return parseFloat(numero1) - parseFloat(numero2);
}
function multiplicar(numero1,numero2) {
    return parseFloat(numero1) * parseFloat(numero2);
}
function dividir(numero1,numero2) {
    if (numero2==0){
        return "No se puede dividir por 0";
    }else{
        return parseFloat(numero1) / parseFloat(numero2);

    }
}

function onlyFloat(e, field) {
    const key = e.keyCode ? e.keyCode : e.which;
    // backspace
    if (key === 8) {
        return true;
    }
    // 0-9 a partir del .decimal
    if (field.value === '.') {
        field.value = '0';
        return false;
    }
    if (field.value !== '') {
        if ((field.value.indexOf('.')) > 0) {
            if (key > 47 && key < 58) {
                if (field.value === '') {
                    return true;
                }
                const regexp = /[0-9]{2}$/;
                return !(regexp.test(field.value));
            } else {
                return false;
            }
        }
    }
    // 0-9
    if (key > 47 && key < 58) {
        if (field.value === '') {
            return true;
        }
        const regexp = /[0-9]{6}/;
        return !(regexp.test(field.value));
    }
    // .
    if (key === 46) {
        if (field.value === '') {
            return false;
        }
        const regexp = /^[0-9]+$/;
        return regexp.test(field.value);
    }
    // other key
    return false;
}