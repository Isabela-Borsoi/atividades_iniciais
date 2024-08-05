<?php

class MinhaClasse {
function ehPar ($a) {
	return ! ($a % 2); 
}
}

$MinhaClasse = new MinhaClasse();
$resultado = "O numero e impar";
if ( $MinhaClasse-> ehPar($_GET["a"])){
    $resultado = "O numero e par";
}
echo($resultado);