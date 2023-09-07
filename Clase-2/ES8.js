const objeto1 = {
    impuesto1: 12,
    impuesto2: 42,
    impuesto3: 35
};
//"keys" dan el nombre del objeto del arreglo 
const soloPropiedades = Object.keys(objeto1);
//"values" dan el valor del objeto del arreglo
const soloValores = Object.values(objeto1)
//"entries" dan las entradas de los valores
const entradas = Object.entries(objeto1)

console.log(soloPropiedades)
console.log(soloValores)
console.log(entradas)
// 12 + 42 + 35
// 0 + 12 = 12
// 12 + 42 = 54
// 54 + 35 = 89
const impuestosTotales = soloValores.reduce((valorInicial, valorAcumulado) => valorAcumulado+ valorInicial )

console.log(impuestosTotales)