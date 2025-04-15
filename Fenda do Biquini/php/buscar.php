<?php

$busca = $POST['vamos_buscar'];
$con = mysqli_connect("localhost: seuLocalHost", "seu_usuario", "sua_senha", "nome_banco");

$result = mysqli_query ( "SELECT * FROM produtos WHERE nome like '%".$busca."%' ");

$dados = array();
    while($registro = mysqli_fetch_assoc($result)) {
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;


?>