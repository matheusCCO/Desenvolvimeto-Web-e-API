function buscar(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            
            var objJSON = JSON.parse(this.responseText);
            var produtos = objJSON.produto;
            var conteudo =  '<table border="1">';
            conteudo +=     '   <tr> ';
            conteudo +=     '       <td>Código</td> ';
            conteudo +=     '       <td>Nome</td> ';
            conteudo +=     '       <td>Preço</td> ';
            conteudo +=     '       <td>Quantidade</td> ';
            conteudo +=     '   </tr>';
            produtos.forEach(prod => {
                conteudo += '<tr>';
                conteudo += '   <td>'  + prod.id +'</td>'
                conteudo += '   <td>'  + prod.nome +'</td>'
                conteudo += '   <td>'  + prod.preco +'</td>'
                conteudo += '   <td>'  + prod.quantidade +'</td>'
                conteudo += '</tr>'
            
            });
            conteudo += '</table>'
            

            document.getElementById("divProdutos").innerHTML = conteudo;
        }
    };

    xhttp.open("GET","servidor.php?listar",true);
    xhttp.send();
}



function salvar(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            buscar();
            

           
        }
    };
    var nome = document.getElementById("txtNome").value;
    var preco = document.getElementById("txtPreco").value;
    var qtd = document.getElementById("txtQuantidade").value;
var url = "servidor.php?cadastrar&nome="+nome+"&preco="+preco+"&quantidade="+qtd;
alert(url);
    xhttp.open("GET",url,true);
    xhttp.send();
}