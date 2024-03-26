<?php
// Directorio donde se guardarán los archivos
$directorioBase = 'Repo-desarollo-Web/';

// Verificar si se ha enviado un archivo
if(isset($_FILES['archivo'])) {
    // Obtener información del archivo
    $archivoNombre = $_FILES['archivo']['name'];
    $archivoTipo = $_FILES['archivo']['type'];
    $archivoTamano = $_FILES['archivo']['size'];
    $archivoError = $_FILES['archivo']['error'];
    $archivoTmpNombre = $_FILES['archivo']['tmp_name'];

    // Obtener la materia seleccionada en el formulario
    $materia = $_POST['materia'];

    // Directorio donde se guardará el archivo según la materia seleccionada
    $directorioMateria = $directorioBase . '/';

    // Verificar si el directorio de la materia existe, si no, crearlo
    if (!file_exists($directorioMateria)) {
        mkdir($directorioMateria, 0777, true);
    }

    // Mover el archivo al directorio correspondiente
    $rutaArchivo = $directorioMateria . $archivoNombre;
    move_uploaded_file($archivoTmpNombre, $rutaArchivo);

    // Mensaje de éxito
    echo "El archivo se ha cargado correctamente.";
} else {
    // Mensaje de error si no se envió ningún archivo
    echo "Por favor seleccione un archivo para cargar.";
}
?>
