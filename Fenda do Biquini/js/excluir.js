window.onload = async function carrega(){
    var resultado = await fetch("../php/produtos.php", {
        method: "GET"
    });

    var dados = await resultado.json();
    
    for(var i = 0; i < dados.length; i++){

        var conteudo = 
            `<div class="card-conteudo">
        
                <div class="card-imagem">
                    <img src="../img/${dados[i].idprodutos}.jpg" class="arrumar"/>
                </div>

                <div class="card-titulo">
                    ${dados[i].nome}
                </div>
        
                <div class="card-desc">
                    R$ ${dados[i].preco} 
                </div>

            
                <div class="card-botao">
                    <button class="editar-botao" onclick="excluir(${dados[i].idprodutos})">Apagar produto</button>
                </div>
        
            </div>`

        document.getElementById('produtos').innerHTML += conteudo;


    }

}

    async function excluir(id){
        var deletar = new FormData();
        deletar.append("idprodutos", id);

        var promise = await fetch("../php/excluir.php", {
            method: "POST",
            body: deletar
        });

        var resultado = await promise.json();
        alert(resultado);

        location.reload();
    }




