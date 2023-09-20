const temporizador = (callback) =>{
    setTimeout(()=> {
        callback();
    },5000);
}

const operacion = () => console.log('realizando la operacion')
console.log('inicio de tareas');

temporizador(operacion);

console.log('fin de tareas');