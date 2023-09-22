const fs = require('fs');

class ProductManager {

    constructor(path) {
        this.path = path;
    }
    //vamos a obtener los usuarios del archivo ususarios.json


    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                // en el caso que exista voy a leer su contenido
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                return products;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    addProduct = async (producto) => {
        try {
            //obtener TODOS los usuarios que tenga almacenado hasta el momento
            //areglo de objetos
            const products = await this.getProducts();
            if (products.length === 0) {
                producto.id = 1;
            } else {
                producto.id = products[products.length - 1].id + 1;
            }
            //insertamos el elemento o usuario
            products.push(producto);
            //una vez que ya hemos terminado el procesamiento 
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'))
            return producto;
        } catch (error) {
            console.log(error)
        }
    }

    getProductsById = async (id) => {
        try {
            const products = await this.getProducts()
            const foundProducts = products.find(product => product.id == id);
            return foundProducts
        } catch (error) {
            console.error('el codigo ha generado un error')
        }
    
    };

    delteProducts = async (id) => {
        try {
            const product = await this.getProducts();
            const borrarProducto = fs.promises.link()
            return borrarProducto;
        } catch (error) {

        }
    }
}

module.exports = {
    ProductManager
}