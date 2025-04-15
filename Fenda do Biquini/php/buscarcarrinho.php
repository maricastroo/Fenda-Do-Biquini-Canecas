<?php
      
    

    $con = mysqli_connect("localhost: seuLocalHost", "seu_usuario", "sua_senha", "nome_banco");

    $resultado = mysqli_query($con, "SELECT * FROM produtos JOIN carrinho ON produtos.idprodutos = carrinho.idproduto");

    $dados = array();
    while($registro = mysqli_fetch_assoc($resultado)) {
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;

?>