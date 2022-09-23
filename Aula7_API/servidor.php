<?php
header("Content-type: application/json");
    $user = "root";
    $senha = "";
    $BD = "loja";
    $host = "localhost";

    $conn = mysqli_connect($host, $user,$senha, $BD);

    if($conn){
       
        if(isset ($_REQUEST["listar"])){
            $sql = "SELECT * FROM produto";
            $result = mysqli_query($conn, $sql);
            $array = array();
            while($linha =  mysqli_fetch_assoc($result)){
                $array[] = $linha;
            }
            echo '{"produto" : '.json_encode($array).'} ';
        }


        if (isset ($_GET["cadastrar"])){
            $nome = $_GET["nome"];
            $preco = $_GET["preco"];
            $qtd = $_GET["quantidade"];
            $sql = "INSERT INTO produto(nome, preco, quantidade) VALUES ('$nome',$preco,$qtd)";
           
            mysqli_query($conn,$sql);
            echo '{"resposta ":"ok"}';
    
        }
        mysqli_close($conn);

    } else{
        echo "Erro ao coneactar no banco";
    }

    

?>