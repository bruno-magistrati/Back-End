const valoresOriginales =[1,2,3,4,5];
const valoresMapa = valoresOriginales.map(valor=>valor+1)
console.log(valoresMapa)
///////
const funcionCallback = (valor) =>{
    if (valor % 2 === 0){
        return valor + 'es par';
    } else{
        return  valor + 'no es par'
    };
}
const valoresPares = valoresOriginales.map(funcionCallback);
console.log(valoresPares)
//////
const miFuncionMap=(arreglo, callBack) =>{
    const nuevoArreglo =[];
    for (let i=0; i <arreglo.length; i++){
        const nuevoValor = callBack(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
const resultadoMap = miFuncionMap(valoresOriginales, x => x*2); 
console.log(resultadoMap);