window.onload = async function(){
    var resultado = await fetch("../php/carrinho.php", {
        method: "GET"
    });


    
    var dados = await resultado.json();



    for(var i = 0; i < dados.length; i++){

        var conteudo = 
        `<div class="card-carrinho">
        
            <div class="carrinho-imagem">
                <img src="../img/${dados[i].idprodutos}.jpg" class="arrumar"/>
            </div>

            <div class="carrinho-titulo">
                ${dados[i].nome}
            </div>
    
            <div class="carrinho-desc">
                R$ ${dados[i].preco} 
            </div>
        
    
        </div>`;

        document.getElementById('produtos').innerHTML += conteudo;


    }
}    
