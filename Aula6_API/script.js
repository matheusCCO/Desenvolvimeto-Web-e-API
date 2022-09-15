function lerDados(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
    };
    xhttp.open("GET","dados.xml",true);
    xhttp.send();
}