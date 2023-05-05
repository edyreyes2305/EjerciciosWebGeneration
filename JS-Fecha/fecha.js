const botonCalcular = document.getElementById("boton");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const year = document.getElementById("year");
const resultado = document.getElementById("resultado");
const resultadoFecha = document.getElementById("resultadoFecha");
let bandera = false;

const calcular = () => {
    let diaContenido = dia.value;
    let mesContenido = mes.value;
    let yearContenido = year.value;
    let fechaNueva = new Date(yearContenido, mesContenido-1, diaContenido);
    let day = fechaNueva.getDay();

    if(yearContenido < 0){
        return alert("No se puede insertar numeros negativos");
    }
    if (diaContenido > 31) {
        return alert("Día invalido");
    }
    if (mesContenido > 12) {
        return alert("Mes invalido");
    }
    if(diaContenido !== "" && mesContenido !== "" && yearContenido !== "" ) {
        bandera = true;
    } else {
        alert("Llena todos los campos");
    }
    if (bandera) {
        switch(day) {
            case 1:
                resultadoFecha.innerHTML = "Tu dia es: Lunes";
                resultado.innerHTML = "El dia es laborable";
                break;
            case 2:
                resultadoFecha.innerHTML = "Tu dia es: Martes";
                resultado.innerHTML = "El dia es laborable";
                break;
            case 3:
                resultadoFecha.innerHTML = "Tu dia es: Miercoles";
                resultado.innerHTML = "El dia es laborable";
                break;
            case 4:
                resultadoFecha.innerHTML = "Tu dia es: Jueves";
                resultado.innerHTML = "El dia es laborable";
                break;
            case 5:
                resultadoFecha.innerHTML = "Tu dia es: Viernes";
                resultado.innerHTML = "El dia es laborable";
                break;
            case 6:
                resultadoFecha.innerHTML = "Tu dia es: Sabado";
                resultado.innerHTML = "El dia no es laborable";
                resultado.style.color("red");
                break;
            case 7:
                resultadoFecha.innerHTML = "Tu dia es: Domingo";
                resultado.style.color = "red";
                resultado.innerHTML = "El dia no es laborable";
                break;
            default:
                alert("Dato invalido");
        }
    }
    
}
