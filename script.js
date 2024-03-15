// Archivos PDF disponibles
// Archivos PDF disponibles para cada materia
var pdfs = {
    "calculo1": [
    "Apunte de hiperbólicas.pdf",
    "continuidad parte 2.pdf",
    "Continuidad.pdf",
    "DERIVADA.pdf",
    "DERIVADA PARTE 2.pdf",
    "DERIVADA PARTE 3.pdf",
    "DERIVADA PARTE 4.pdf",
    "ESTUDIO DE FUNCIONES PARTE 1.pdf",
    "FUNCIONES PARTE 1.pdf",
    "FUNCINES PARTE 2",
    "ESTUDIO DE FUNCIONES PARTE 2.pdf",
    "FUNCIONES  PARTE 3.pdf",
    "FUNCIONES 4 PARTE.pdf",
    "INTEGRACIÓN  PARTE 1.pdf",
    "INTEGRACIÓN    PARTE 2.pdf",
    "INTEGRACIÓN PARTE 3.pdf",
    "INTEGRACIÓN PARTE 4.pdf",
    "LÍMITEclase 1.pdf",
    "LIMITE clase 2.pdf",
    "LÍMITE clase 3.pdf",
    "LIMITE PARTE 4.pdf",
    ],

    "discreta": [
    "Álgebras de Boole.pdf", 
    "Análisis Combinatorio.pdf", 
    "Aritmètica entera y modular.pdf", 
    "Ecuaciones diofánticas y ecuaciones en congruencia.pdf",
    "Funciones booleanas (nuevo).pdf", 
    "Práctica de Grafos.pdf",
    "RESPUESTAS PRÁCTICA DE GRAFOS.pdf", 
    "Redes de Petri.pdf",
    "Relaciones Binarias.pdf",
    "RELACIONES EN UN CONJUNTO - RELACIONES DE EQUIVALENCIA - TEORÍA 2018.pdf",
    "Retículos2021.pdf",
    "Teoría conjuntos ordenados y retículos (2).pdf",],
};

// Obtener la lista donde se agregarán los enlaces PDF
var lista = document.querySelector(".listas");

// Generar enlaces PDF para cada materia
Object.keys(pdfs).forEach(function(materia) {
    // Crear un elemento de lista para la materia
    var materiaItem = document.createElement("li");
    materiaItem.textContent = materia;

    // Crear una lista para los enlaces PDF de la materia
    var pdfList = document.createElement("ul");

    // Generar enlaces PDF para cada archivo de la materia
    pdfs[materia].forEach(function(pdf) {
        var pdfItem = document.createElement("li");
        var pdfLink = document.createElement("a");
        pdfLink.textContent = pdf; // El texto del enlace es el nombre del archivo PDF
        pdfLink.href = "matematica/"+materia + "/" + pdf; // La ruta del enlace es la carpeta 'pdfs/' más el nombre del archivo PDF
        pdfLink.target = "_blank"; // Abrir en una nueva pestaña
        pdfItem.appendChild(pdfLink);
        pdfList.appendChild(pdfItem);
    });

    // Agregar la lista de enlaces PDF a la materia
    materiaItem.appendChild(pdfList);

    // Agregar la materia y sus enlaces PDF a la lista principal
    lista.appendChild(materiaItem);
});















