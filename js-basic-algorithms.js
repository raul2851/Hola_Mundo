// 1: Variables

// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

const myFavoriteHero = "Hulk"

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.

var x = 50;


//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.

var h = 5;
var y = 10;

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

var z = h + y;

// 2: Variables avanzadas

//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
//const character = {name: 'Jack Sparrow', age: 10};

const character = { name: " Jack Sparrow", age: 25 };

//1.2 Declara 3 variables con los nombres y valores siguientes 
//firstName = 'Jon'; 
//lastName = 'Snow'; 
//age = 24; 

var firstName = 'Jon';
var lastName = 'Snow';
var age = 24;

//Muestralos por consola de esta forma: 
//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

console.log("soy",  firstName,  "  " +lastName , "  ", " tengo ", age, " 24 años y me gustan los lobos. "

);

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//ambos juguetes.
//const toy1 = {name: 'Buss myYear', price: 19};
//const toy2 = {name: 'Rallo mcKing', price: 29};

const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };
console.log(
    toy1.name +
    toy2.name +
    (toy1.price + toy2.price)
);

//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
//basePrice más el valor de la variable globalBasePrice.
//let globalBasePrice = 10000;
//const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
//const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

// 3: Operadores

//1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

var mul = 10 * 5;
console.log(mul)(
    alert(mul)
);

//1.2 Divide 10 por 2 y muestra el resultado en un alert.

var div = 10 / 2;
console.log(div)(
    alert(div)
);

//1.3 Muestra mediante un alert el resto de dividir 15 por 9.

var res = 15 % 9;
console.log(res)(
    alert(res)
);

//1.4 Usa el correcto operador de asignación que resultará en x = 15, 
//teniendo dos variables y = 10 y z = 5.

var y = 10;
var z = 5;
var x = y + z;
console.log(x);

//1.5 Usa el correcto operador de asignación que resultará en x = 50,
//teniendo dos variables y = 10 y z = 5.

var y = 10;
var z = 5;
var x = y * z;
console.log(x);
