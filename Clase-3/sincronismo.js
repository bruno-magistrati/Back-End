const delay = ()=>{
    for(let i = 0; i < 1e8; i++);
}

function hacerTarea(numeroTarea){
    console.log('haciendo tarea......'+ numeroTarea);
    delay();
}




// console.log('iniciando tareas');
// hacerTarea(1);
// hacerTarea(2);
// hacerTarea(3);
// hacerTarea(4);
// console.log('fin de tareas')

console.log('iniciando tareas asincorincas');
setTimeout(()=> {
    console.log('haciendo tarea asincronica')
}, 5000);
hacerTarea(1);
hacerTarea(2);
console.log('fin de tareas')