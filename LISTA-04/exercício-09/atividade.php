<?php

class MinhaClasse {
    function ehBissexto ($ano) {
        $divisivel4 = $ano % 4 == 0;
        $divisivel100 = $ano % 100 == 0;
        $divisivel400 = $ano % 400 == 0;
        return ($divisivel4 && !$divisivel100) || $divisivel400 ;
    }
}

$MinhaClasse = new MinhaClasse();
$ano = "O ano nao e bissexto";
if ( $MinhaClasse-> ehBissexto($_GET["a"])){
    $ano = "O ano e bissexto";
}
echo($ano);