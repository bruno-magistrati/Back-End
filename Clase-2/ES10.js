const cadena1 = '      hola';
const cadena2 = cadena1.trim();

console.log(cadena1.length);
console.log(cadena2);
console.log(cadena2.length);

const arregloAnidado = [ [1,2], [3,4],[5,6,[7,8,[6,7]]]];

const arregloProcesado = arregloAnidado.flat();

console.log(arregloProcesado)

//NULLISH OPERATOR

const prueba = 0;

const nullish = prueba ?? 'sin valor';
const variablePorDefeto = prueba || 'sin valor';
console.log(variablePorDefeto);
console.log(nullish);