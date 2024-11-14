// Función para llamar al archivo PHP y crear la base de datos
function crearBaseDeDatos() {
    fetch('crearBaseDeDatos.php')
        .then(response => response.text())
        .then(data => {
            console.log(data); // Muestra el mensaje que devuelve el archivo PHP
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
/*// Función para crear la base de datos y las tablas
function crearBaseDeDatosYTablas() {
    fetch('crearBaseDeDatos.php')
        .then(response => response.text())
        .then(data => {
            console.log(data); // Muestra el mensaje de confirmación
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Llamar a la función para crear la base de datos y las tablas
crearBaseDeDatosYTablas();*/
// Llamar a la función para crear la base de datos
crearBaseDeDatos();