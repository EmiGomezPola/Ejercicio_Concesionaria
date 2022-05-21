// paso el valor numerico del Precio a formato de Pesos
const valorPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2
});
   
let Precio = valorPeso;

class Vehiculo{
        constructor(Marca, Modelo,Precio){ 
            this.Marca = Marca;
            this.Modelo = Modelo;
            this.Precio = Precio;
        }
        listar(){
         
        if (this.Cilindrada === undefined){
            console.log( `Marca:  ${this.Marca}// Modelo: ${this.Modelo}// Puertas: ${this.Puertas}// Precio: ${Precio.format(this.Precio)}`)
        }else{
            console.log (`Marca:  ${this.Marca}// Modelo: ${this.Modelo}//Cilindrara: ${this.Cilindrada} // Precio:  ${Precio.format(this.Precio)}`)
        }
        };   
    };

    class Autos extends Vehiculo{
        constructor(Marca, Modelo, Puertas, Precio){
            super(Marca, Modelo, Precio); 
            this.Puertas = Puertas;          
        }
    };

    class Motos extends Vehiculo{
       constructor(Marca, Modelo, Cilindrada, Precio){
            super(Marca, Modelo, Precio);
            this.Cilindrada = Cilindrada;  
        }
    };


let autoUno = new Autos("Peugeot", "206", "4", 200000 );
let motoDos = new Motos("Honda","Titan", "125cc", 60000 );
let autoTres = new Autos( "Peugeot", "208", "5", 250000 );
let motoCuatro = new Motos( "Yamaha", "YBR", "160cc", 80500.50 );
 
autoUno.listar();
motoDos.listar();
autoTres.listar();
motoCuatro.listar();
console.log('===========================================================================');



let lista = new Array ( autoUno, motoDos, autoTres, motoCuatro);
//console.log (lista);

let ordenDecreciente = lista.sort((a,b) => {
    if( a.Precio > b.Precio ){
        return -1;
    }
    if (a.Precio < b.Precio){
         return 1;
    }
    return 0;
})
//console.log (ordenDecreciente)

let masCaro = ordenDecreciente[0].Marca + ' ' + ordenDecreciente[0].Modelo;
let masBarato = ordenDecreciente[ordenDecreciente.length-1].Marca + ' ' + ordenDecreciente[ordenDecreciente.length-1].Modelo;

console.log('Vehiculo más caro: ' + masCaro);
console.log( 'Vehiculo más barato: '+ masBarato);

//creo una variable que contenga dentro de los Modelos la letra Y
const letra = lista.find(function(letraY){
    return letraY.Modelo.includes ('Y');
})
//console.log(letra)

const precioY= letra.Precio;
//console.log(precioY)

console.log('Vehiculo que contiene en el modelo la letra "Y": '+ letra.Marca +' '+ letra.Modelo +' ' +valorPeso.format(precioY));
console.log('===========================================================================');

// creo una funcion llamando a la variable (ordenDecreciente) para que me imprima en consola solo la marca y el modelo de dicha lista.
function listado(ordenDecreciente ){
        console.log ('Vehiculos ordenado por precio de mayor a menos: ');
   for( let i = 0; i< lista.length; i++){
       console.log ( ordenDecreciente[i].Marca, ordenDecreciente[i].Modelo);
    }
}
listado(ordenDecreciente);


