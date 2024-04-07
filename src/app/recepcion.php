<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
$server = "localhost";
$user = "root";
$pass = "";
$bd = "activos";
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");
$sql = "SELECT * FROM activo";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
if(!$result = mysqli_query($conexion, $sql)) die();
$datos = array(); //creamos un array
while($row = mysqli_fetch_array($result)) 
{ 
    $id = intval($row['id']);
    $nombre=$row['nombre'];
    $descripcion=$row['descripcion'];
    $tipo=$row['tipo'];
    $serial=$row['serial'];
    $fecha=$row['fecha'];
    $peso=$row['peso'];
    $alto=$row['alto'];
    $ancho=$row['ancho'];
    $largo=$row['largo'];
    $precio=$row['precio'];
    $imagen=$row['imagen'];

    $datos[] = array('id'=> $id, 'nombre'=> $nombre, 'descripcion'=> $descripcion, 'tipo'=> $tipo,
                        'serial'=> $serial);
} 
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
//Creamos el JSON
$json_string = json_encode($datos);
echo $json_string;
//Si queremos crear un archivo json, sería de esta forma
$file = 'clientes.json';
file_put_contents($file, $json_string);
?>