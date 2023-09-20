const fs = require('fs');

const operacionesArhicosAsincrono = async()=>{
    try {
        await fs.promises.writeFile('fs-promesas.txt', 'hola mundo desde promesas');
        let resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8')
        console.log(resultado)
        await fs.promises.appendFile('./fs-promesas.txt', '\nMas contenido')

        resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8')
        console.log(resultado);

        await fs.promises.unlink('./fs-promesas.txt');


    } catch (error) {
        console.log(error)
    }
}

operacionesArhicosAsincrono();