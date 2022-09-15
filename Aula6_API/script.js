function lerDados(){
    console.log("this");
    
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyStatus == 4 && this.status == 200){
            console.log(this);
            var dados = this.responseXML;
            

            var conteudo = '<table border="1">';
            conteudo += '       <th>';
            conteudo += '           <td>Codigo</td>';
            conteudo += '           <td>Nome</td>';
            conteudo += '           <td>Preço</td>';
            conteudo += '       </th>';
            

            var produtos = dados.getElementsByTagName("produto");
            for(var i = 0; i<= produtos.length;i++){
                console.log("this laço");
                var id = produtos[i].getElementsByTagName("id");
                var nome = produtos[i].getElementsByTagName("nome");
                var preco = produtos[i].getElementsByTagName("preco");
                conteudo +="<tr>";
                
                conteudo +="    <td>"+id[0].childNodes[0].nodeValue+"</td";
                conteudo +=     "<td>"+id[0].childNodes[0].nodeValue+"</td";
                conteudo +=     " <td>"+id[0].childNodes[0].nodeValue+"</td";
                conteudo +="</tr>";
            }

            conteudo += "</table>";
            console.log("this conteudo");
            document.getElementById("minhaDiv").innerHTML =conteudo;
        } else {
            document.getElementById("minhaDiv").innerHTML ="<p>Algo deu errado</p>";
        }
    };
    xhttp.open("GET","dados.xml",true);
    xhttp.send();
}