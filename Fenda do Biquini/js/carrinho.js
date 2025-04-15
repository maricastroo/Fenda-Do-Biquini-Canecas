window.onload = async function buscarcarrinho(){
    var resultado = await fetch("../php/carrinho.php", {
        method: "GET"
    });


    
    var dados = await resultado.json();



    for(var i = 0; i < dados.length; i++){

        var conteudo = 
        `
        
        <div class="card-carrinho">
        
            <div class="carrinho-imagem">
                <img src="../img/${dados[i].idprodutos}.jpg" class="arrumar"/>
            </div>

            <div class="carrinho-titulo">
                ${dados[i].nome}
            </div>
    
            <div class="carrinho-desc">
                R$ ${dados[i].preco} 
            </div>
        
    
        </div>
        
        `;

        document.getElementById('produtos').innerHTML += conteudo;


    }

}
window.onload = async function buscarcarrinho(){
    var resultado = await fetch("../php/buscarcarrinho.php", {
        method: "GET"
    });

    var dados = await resultado.json();
    var preco_total = 0;

    for(var i = 0; i < dados.length; i++){
        var conteudo = 
        `<div class="card-conteudo">
            <img src="../img/${dados[i].idprodutos}.jpg" width="120px" height="120px">
            <h1>${dados[i].nome}</h1>
            <p> R$ ${dados[i].preco}</p>
        </div>`;
        preco_total += Number(dados[i].preco);

        document.getElementById('carrinho').innerHTML += conteudo;
    }

    var valor_total = `<h3> VALOR TOTAL = R$ ${preco_total}</h3>`
    document.getElementById('carrinho').innerHTML += valor_total;

    var finalizar = 
    `<a href="../html/pagamento.html"><button type="button" class="botao-finalizar"> FINALIZAR COMPRA </button></a>`
    document.getElementById('carrinho').innerHTML += finalizar;
}

