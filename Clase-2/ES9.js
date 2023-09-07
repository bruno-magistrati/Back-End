const objeto1 = {
    propiedad1: 2,
    propiedad2: 'b',
    propiedad3: true

};

const objeto2 = {
    propiedad4: 'c',
    propiedad1:[1,2,3,4,5]
};

//SPREAD destructuring

const {propiedad1, propiedad2} = objeto1;
console.log(propiedad1,propiedad2)

const objetoResultado ={...objeto1, ...objeto2}

console.log(objetoResultado)

