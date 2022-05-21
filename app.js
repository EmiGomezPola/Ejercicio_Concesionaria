/*
// crep im array con los diferentes vehiculos de la concesionaria.
let vehiculos = [
    {
        Marca: "Peugeot",
        Modelo: "206",
        Puertas: "4",
        Precio: 200000
    },
    {
        Marca: "Honda",
        Modelo: "Titan",
        Cilindrada: "125cc",
        Precio: 60000
    },
    {
        Marca: "Peugeot",
        Modelo: "208",
        Puertas: "5",
        Precio: 250000
    },
    {
        Marca: "Yamaha",
        Modelo: "YBR",
        Cilindrada: "160cc",
        Precio: 80500.50
    }
    ];
// paso el valor numerico del Precio a formato de Pesos
const valorPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

// itero el array con sus objetos para obtener la lista de los vehiculos
   for( let i = 0; i< vehiculos.length; i++){
    if (vehiculos[i].Cilindrada == undefined){
        console.log ('Marca : '+ vehiculos[i].Marca, ' // Modelo: '+ vehiculos[i].Modelo, ' // Puertas: '+ vehiculos[i].Puertas, ' // Precio: '+ valorPeso.format(vehiculos[i].Precio));
    }else{
        console.log ('Marca : '+ vehiculos[i].Marca, ' // Modelo: '+ vehiculos[i].Modelo, ' // Cilindrada: '+ vehiculos[i].Cilindrada, ' // Precio: '+ valorPeso.format(vehiculos[i].Precio));

    }
} 
console.log('===========================================================================');
 
//obtengo la lista decreciente segun el valor del precio de todos los vehiculos
let ordenDecreciente = vehiculos.sort((a,b) => {
    if( a.Precio > b.Precio ){
        return -1;
    }
    if (a.Precio < b.Precio){
         return 1;
    }
    return 0;

})
//console.log(ordenDecreciente)
// hago una variable para obtener el primer valor de la lista de los vehiculos ordenados por precio.
let masCaro = ordenDecreciente[0].Marca + ' ' + ordenDecreciente[0].Modelo;
// hago una variable para obtener el ultimo valor de la lista de los vehiculos ordenados por precio.
let masBarato =ordenDecreciente[3].Marca+ ' '+ ordenDecreciente[3].Modelo;
console.log('Vehiculo más caro: ' + masCaro);
console.log( 'Vehiculo más barato: '+ masBarato);


//creo una variable que contenga dentro de los Modelos la letra Y
const letra = vehiculos.find(function(letraY){
    return letraY.Modelo.includes ('Y')
})
//console.log(letra)

const precioY= letra.Precio;
//console.log(precioA)

console.log('Vehiculo que contiene en el modelo la letra "Y": '+ letra.Marca +' '+ letra.Modelo +' ' +valorPeso.format(precioY));
console.log('===========================================================================');

// creo una funcion llamando a la variable (ordenDecreciente) para que me imprima en consola solo la marca y el modelo de dicha lista.
function listado(ordenDecreciente ){
        console.log ('Vehiculos ordenado por precio de mayor a menos: ')
   for( let i = 0; i< vehiculos.length; i++){
       console.log ( ordenDecreciente[i].Marca, ordenDecreciente[i].Modelo)
    }
}
listado(ordenDecreciente);
*/

