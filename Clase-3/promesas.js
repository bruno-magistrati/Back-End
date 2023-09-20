const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede hacer divisiones entre cero");
        } else {
            resolve(dividendo / divisor);
        }
    });
};

// dividir(10, 2)
//     ///// manejo de promesas cumplidas
//     .then((resultado) => {
//         console.log(resultado);
//         return resultado;
//     })
//     .then((resultado2) => {
//         console.log(resultado2 * 3);
//     })
//     //// manejo de promesas fallidas
//     .catch((error) => {
//         console.log(error);
//     });

//este bloque tiene comportamiento asincronico 
const funcionAsincrona = async () =>{
    try {
        //await espera el resultado de la promesa
        const resultado = await dividir(10,2);
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

funcionAsincrona();