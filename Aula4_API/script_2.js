function gerar(){
    var valor = parseInt(document.getElementById("txtValor").value);
    var xhttp = new XMLHttpRequest;
    var divConteudo = document.getElementById("conteudo");
    divConteudo.innerHTML ="Carregando.....";
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          
           divConteudo.innerHTML = this.responseText;
        } else if(this.readyState == 3){
            
            divConteudo.innerHTML = this.status + "-" + this.statusText;
        }
    };

    xhttp.open("GET", "servdor.php?valor=" + valor, true);
    xhttp.send();
}