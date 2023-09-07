const valoresBase = [1, 2, 3, 4];
//0, 1, 2, 3

const potenciasValoresBase = valoresBase.map(
    (numero, indice) => numero ** indice
);

console.log(potenciasValoresBase);

// //Single responsability (se refiere a aplicarle un nombre a una funcion la cual se encargue de una sola accion)
// //OLID
// function calcularDistancia(latitud, longitud) {
//     //trabjo la suma de dos numeros
// }
//includes
const nombre = ["Alex", "Daniel", "Eleonora"];

if (nombre.includes("Daniel") === true) {
    console.log("Tenemos el Nombre");
} else {
    console.log("No se encuentra el nomre");
}
//---> resultado un boolean true o false