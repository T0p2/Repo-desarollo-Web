

/* Reto de Cofla*/

/*Crear sistema que nos permita darle a elegir la llave correcta al cofla*/







const container = document.querySelector(".container");
const button = document.querySelector("#button");
let valorAnt = button.value
button.value = valorAnt.toUpperCase()

const data = document.querySelector(".key-data");

function crearLlave(nombre, modelo, precio){
    img = "<img class='llave-img' src='llave.png'>";
    return[img, nombre, modelo, precio]
}


button.addEventListener("click",()=>{
    alert("Elegiste el modelo : "+data.value)
})



for (let i = 0; i <= 10; i++){
   
    const div = document.createElement("div");
    div.classList.add("flex-item");


    let modelo = Math.round(Math.random()*10)
    let precio = Math.round(Math.random()*10)

    let llave = crearLlave("Llave "+i, "Modelo "+modelo, "$"+precio);
    llave.join("<br>");

    // Agregar la llave al contenido del div
    llave.forEach((element) => {
        const p = document.createElement("p");
        p.innerHTML = element;
        div.appendChild(p);
    });

    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modelo;
    });
  
    // Agregar el div al contenedor
    container.appendChild(div);
}
