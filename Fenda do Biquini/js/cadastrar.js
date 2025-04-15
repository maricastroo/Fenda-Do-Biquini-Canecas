async function cadastrar(){
    var cadastro = document.getElementById("cadastro");
    var dados = new FormData(cadastro);   
    
    var promise = await fetch("../php/cadastrar.php", {
        method: "POST",
        body: dados
    });

    var resultado = await promise.json();
    alert(resultado);
}