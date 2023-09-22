const {ProductManager} = require('./managers/UserManager');

const manager = new ProductManager('./files/Usuarios.json');

const env = async () =>{
    const productos = await manager.getProducts();
    console.log(productos);

    const producto = {
        title: 'Zapato',
        description:'Zapato de cuero',
        price:200,
        thumbnail:'n/d',
        code:3,
        stock:12
    };

    await manager.addProduct(producto)

    const usuariosresultadofinal = await manager.getProducts();
    console.log(usuariosresultadofinal);
}

env();