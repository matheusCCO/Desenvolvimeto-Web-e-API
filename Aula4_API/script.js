function ler(){
   
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("resultado").innerHTML = this.responseText;
        } else{
            document.getElementById("resultado").innerHTML = "<h1>Tivemos um problema "+ this.status +"</h1>";
        }
    };

    xhttp.open("GET","texto.txt","true");
    xhttp.send();
}

function gerar(){
    var valor = parseInt(document.getElementById("txtValor").value);
    var xhttp = new XMLHttpRequest;
    var divConteudo = document.getElementById("conteudo");
    divConteudo.innerHTML ="Carregando.....";
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           var divConteudo = document.getElementById("condeudo");
           divConteudo.innerHTML = this.responseText;
        } else if(this.readyState == 4){
            alert("Problema ao conectar");
            divConteudo.innerHTML = this.status + "-" + this.statusText;
        }
    };

    xhttp.open("GET", "servdor.php?valor=" + valor, true);
    xhttp.send();
};