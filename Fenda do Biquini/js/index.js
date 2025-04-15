window.onload = async function carrega(){
    var resultado = await fetch("php/produtos.php", {
        method: "GET"
    });


    
    var dados = await resultado.json();



    for(var i = 0; i < dados.length; i++){

        var conteudo = 
        `<div class="card-conteudo">
        
            <div class="card-imagem">
            <img src="img/${dados[i].idprodutos}.jpg" class="arrumar"/>
            </div>

        <div class="card-titulo">
            ${dados[i].nome}
        </div>
        
        <div class="card-desc">
            R$ ${dados[i].preco} 
        </div>
            
        <div class="card-botao">
            <button class="editar-botao" onclick="comprar(${dados[i].idprodutos})">Adicionar ao Carrinho</button>
        </div>
        
        </div>`;

        document.getElementById('produtos').innerHTML += conteudo;


    }

}

async function comprar(idprodutos){
    var dados = new FormData();
    dados.append("idproduto", idprodutos);

    var promise = await fetch("php/carrinho.php", {
        method: "POST",
        body:dados
    });

    var resultado = await promise.json();
    alert(resultado);

}





async function procura(){
    var input = document.getElementById("buscar");
    var input_value = input.value.toLowerCase();
    var resultado = await fetch("php/produtos.php", {
        method: "GET", 
    });

    var dados = await resultado.json();

    var produtosfiltrados = dados.filter(produto => produto.nome.toLowerCase().includes(input_value));
        document.getElementById('produtos').innerHTML = '';
            for(var i = 0; i < produtosfiltrados.length; i++){
                var conteudo = 

               ` <div class="card-conteudo">
        
                    <div class="card-imagem">
                        <img src="img/${produtosfiltrados[i].idprodutos}.jpg" class="arrumar"/>
                    </div>

                    <div class="card-titulo">
                        ${produtosfiltrados[i].nome}
                    </div>
        
                    <div class="card-desc">
                        R$ ${produtosfiltrados[i].preco} 
                    </div>
            
                    <div class="card-botao">
                        <button class="editar-botao" onclick="comprar(${dados[i].idprodutos})">Adicionar ao Carrinho</button>
                    </div>
        
                </div>`;

                document.getElementById('produtos').innerHTML += conteudo;

    }
}









