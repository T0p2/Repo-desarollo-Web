
/*alert("hola")*/

/* variables */

let texto ="variable";
let numero ="2";
let booleano ="true";
let nulo =null;



/* alert(texto+numero+booleano) */

/*Concatenacion*/

let nombre = prompt("Cual es tu nombre?")
/*IMPORTANTE hay que ponerle let o var*/

saludo ="hola";
/* pregunta ="Como estas?, ".concat(nombre); */
pregunta = `¿Cómo estás, ${nombre}?\n `;

/* frase = saludo + ", " + pregunta;
 */
document.write(pregunta)


if(nombre == "nacho"){
    document.write("<br>Que nombre mas homo");
}else{
    document.write("<br>Hola "+nombre+"<br>");
}


/*Ejercicio 1
roberto = 1.5
Pedro =1.7
Confla =3
*/

let roberto = prompt("Ingrese su cantidad roberto");
let pedro = prompt("Ingrese su cantidad pedro");
let confla = prompt("Ingrese su cantidad confla");

/*precios*/
const palitoDeAgua = 0.6;
const palitoBombon =1;
const bombonHeladoHeladix = 1.6;
const bombonHeladoHeladovich =1.7;
const bombonHeladoHelardo =1.8;
const potecitoHelado =2.9;
const poteUncuarto=2.9;

alert("Nuestros helados mas caros son: " + "potecito de helado " + potecitoHelado + "Un cuarto " + poteUncuarto);

/*Soluciones:
Pedriles que ingresen en monto que tienen y mostrales el helado mas caro
si hay 2 o mas con el mismo precio, mostrar todos
Cofla queire saber su vuelto*/

/*basicamente anidamos ifs y les pedimos que helados quieren comprar
le restamos el precio de los helados a la cantidad que tienen y listo
si tienen 0 o menos chau.*/

/*arrya y array asociativo*/

let fruta = ["manzana","pera","naranja"];


let alumno={
    nombre: "Juan",
    apellido: "Perez",
    legajo: 123
}

frase= `
    el nombre del alumno ${alumno["nombre"]} <br>
    con apellido ${alumno["apellido"]} <br>
    y legajo ${alumno["legajo"]} <br>

`

document.write(frase);


/*bucles*/

let numero0 = 0;

do{
    numero0++
    document.write(numero0 + "<br>");
}
while(numero0>10)


for(let i = 0; i <=10;i++){
    if(i == 5){
        continue;
    }
    document.write(i+ "<br>");
    
}


let animales = ["perro","gato","elefante"];

for (animal in animales){
    document.write("este es en el for-in " +animal + "<br>");
}

for (animal of animales){
    document.write("este es en el for-of " +animal + "<br>");
}


>>>>>>> e6ca6ce (update)
