const productos = [
    { 
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sanidas:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

//hasmaps

let arregloResultante=[];
let total = 0;
productos.forEach(productos => {
    const keys = Object.keys(productos);
    const values =Object.values(productos);

    total  += values.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);


    keys.forEach(key => {
        if(!arregloResultante.includes(key)) arregloResultante.push(key)
    })

});

console.log(arregloResultante)
console.log(total)