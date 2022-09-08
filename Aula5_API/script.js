function lerDados(){
    var xHTTP = new XMLHttpRequest();

    xHTTP.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var obj = JSON.parse(this.responseText);

            var conteudo = "Nome"+ obj.nome +"<br>";

            conteudo += "Conjuge:" + obj.conjuge.nome + "<br>";

            document.getElementById("dados").innerHTML = conteudo;
        }
    };

    xHTTP.open("GET", "meuJSON.json",true);
    xHTTP.send();
}