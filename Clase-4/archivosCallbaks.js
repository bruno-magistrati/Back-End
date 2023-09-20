const fs = require('fs');
fs.writeFile('./archivo-cb.txt', 'hola mundo estoy usando archivos cb', error => {
    if (error) {
        throw new Error(`Error en la ceracion del archivo ${error}`)
    }
    fs.readFile('./archivo-cb.txt', 'utf-8', (errorm, contenido) => {
        if (error) {
            throw new Error(`Error en la lectura del archivo ${error}`)
        }
        console.log(contenido);

        fs.appendFile('./archivo-cb.txt', '\nMas contenido', error => {
            if (error) {
                throw new Error(`Error en la actualizacion del archivo ${error}`)
            }

            fs.readFile('./archivo-cb.txt', 'utf-8', (error, contenido) => {
                if (error) {
                    throw new Error(`Error en la lectura del archivo ${error}`)
                }
                console.log(contenido);
                fs.unlink('./archivo-cb.txt', error =>{
                    if (error) {
                        throw new Error(`Error en la eliminacion del archivo ${error}`)
                    } 

                })

            })
        })
    })
})