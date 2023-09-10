//FUNCION QUE AGREGA LOS VALORES A LA PANTALLA DE LA CALCULADORA
const agregar = (valor) => {
    document.getElementById('pantalla').value += valor;
}

//FUNCION QUE BORRA LO QUE ESTA EN LA PANTALLA DE LA CALQULADORA
const borrar = () => {
    document.getElementById('pantalla').value = '';
}

//FUNCION PARA CALCULAR EL RESULTADO DE LA OPERACION
const calcular = () => {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado;
}