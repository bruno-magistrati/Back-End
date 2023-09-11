class ProductManager {

constructor(){
    this.products = []
}
//devuleve los productos creados
getProducts = () =>{
    return this.products
}

//se busca el id 
getProductByld =(id)=>{
    const productByld= this.products.find(producto=>producto.id === id);
    if (!productByld){
        console.error('Not found');
        return;
    }
    return productByld;
}
//Se generan los productos
agregarProductos = (title,description,price,thumbnail,code,stock) =>{
    if (!title || !description || !price || !thumbnail || !code || !stock){
        console.error('Debe llenar todos los campos')
        return;
    };
    const producto = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };
    for(let i=0; i < this.products.length; i++){
        const p = this.products[i];
        const cod = p.code;
        if(cod === producto.code){
            console.error('producto registrado')
            return;
        }
    }

            //Generamos un id
            if (this.products.length === 0){
                producto.id = 1;
                //generamos un nuevo id
            } else {
                producto.id = this.products[this.products.length - 1].id + 1;
    }

        this.products.push(producto)
}

}

const nuevoProducto = new ProductManager();

nuevoProducto.agregarProductos('manzana','manzana roja',50, 'imagen',12,30 )
nuevoProducto.agregarProductos('pera','pera verde',20,'imagen',9,30 )
console.log(nuevoProducto.getProducts());