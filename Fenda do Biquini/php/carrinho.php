<?php

    $id = $_POST['idproduto'];

    $con = mysqli_connect("localhost: seuLocalHost", "seu_usuario", "sua_senha", "nome_banco");

    mysqli_query($con, "INSERT INTO carrinho(idproduto) VALUES ($id)");

   

    $mensagem = "Produto adicionado ao carrinho!";
    $json = json_encode($mensagem);
    echo $json;



?>