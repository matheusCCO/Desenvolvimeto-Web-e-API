function lerDados(){
    var xHTTP = new XMLHttpRequest();

    xHTTP.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var obj = JSON.parse(this.responseText);

            var conteudo = "Nome"+ obj.nome +"<br>";

            conteudo += "Conjuge:" + obj.conjuge.nome + "<br>";
            conteudo += "filhos: <br>";
            obj.filhos.forEach(filho => {
                conteudo += filho.nome + " - > idade: "+ filho.idade +"<br>"
            });
            conteudo += "tempo desde as formaturas: <br>";
            obj.formaturas.forEach( ano =>{
                conteudo += (2022 - ano) + " ano(s) <br>";
            })

            document.getElementById("dados").innerHTML = conteudo;
        }
    };

    xHTTP.open("GET", "meuJSON.json",true);
    xHTTP.send();
}