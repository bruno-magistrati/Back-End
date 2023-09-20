//node_modules -> se encuentra todas las dependencias nativas o globales que hay 
const fs = require('fs');
// se utiliza para crear el archivo nombrarlo y/o darle contenido
fs.writeFileSync('./ejemplo.txt','hola coder estamos trabajando en un archivo')
//se utiliza para verificar su existencia 
if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);
    //se utiliza para agregar contenido al archivo
    fs.appendFileSync('./ejemplo.txt','\nMas contenido')

    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    //se utiliza para eliminar el archivo 
    fs.unlinkSync('./ejemplo.txt')
}