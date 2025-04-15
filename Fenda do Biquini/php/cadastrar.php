<?php
    $nome = $_POST["produto-nome"];
    $preco = $_POST["produto-preco"];
    $imagem = $_FILES["imagem-produto"];
    
    $con = mysqli_connect("localhost: seuLocalHost", "seu_usuario", "sua_senha", "nome_banco");

    $query = "INSERT INTO produtos (nome, preco) VALUES ('$nome', '$preco')";
    mysqli_query($con, $query);

    $id = mysqli_insert_id($con);
    $imagem_produto = "../img/" . $id . ".jpg";
    move_uploaded_file($imagem["tmp_name"], $imagem_produto);

    $mensagem = "Produto cadastrado com sucesso!";
    $json = json_encode($mensagem);
    echo $json;
?>