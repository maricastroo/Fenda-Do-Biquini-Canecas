<?php

$id = $_POST["idprodutos"];

$con = mysqli_connect("localhost: seuLocalHost", "seu_usuario", "sua_senha", "nome_banco");

$query = "DELETE FROM produtos WHERE (idprodutos = '$id')";
mysqli_query($con, $query);

$img = "../img/" . $id . ".jpg";
unlink($img);

$mensagem = "Produto Excluído!";
$json = json_encode($mensagem);
echo $json;


    
?>
