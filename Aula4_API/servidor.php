<?php

$valor = $_GET["valor"];
$conteudo = "";
for($i= 1; $i <= $valor; $i++){
    $conteudo .= $i."<br>";

}
echo $conteudo;