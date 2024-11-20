<?php
$servername = "localhost";
$username = "root"; // Por defecto en XAMPP el usuario es "root"
$password = ""; // Por defecto, la contraseña está vacía
$dbname = "skyfalyer"; // Nombre de la base de datos que quieres crear

// Crear conexión
$conn = new mysqli($servername, $username, $password);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// SQL para crear base de datos
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Base de datos creada correctamente";
} else {
    echo "Error al crear la base de datos: " . $conn->error;
}

/*
// SQL para crear una tabla
$sql = "CREATE TABLE IF NOT EXISTS usuarios (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Tabla 'usuarios' creada correctamente";
} else {
    echo "Error al crear la tabla: " . $conn->error;
}
*/
$conn->close();
?>