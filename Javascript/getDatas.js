function imprimir() {
  let txtNombre = document.getElementById("nombre").value;
  console.log("Hola Mundo", txtNombre);
}
function validarTexto(event, field) {
  console.log(event);
  console.log(field);
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

function validarLetras(e,field){
    const key = e.keyCode ? e.keyCode : e.which;

    console.log(event);
    console.log(field);
    if (key === 8) {
        return true;
    }
    if (key > 47 && key < 58) {
    return false;
    }
    if (key ===(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+([a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g)){
    return true;
    } else {
        return false

    }

}
