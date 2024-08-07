<?php

class MinhaClasse {
    function area($raio) {
        
        return ($raio * $raio) * pi() ;
    }
}

$minhaClasse = new MinhaClasse();
echo("A area do circulo é {$minhaClasse->area($_GET['a'])} onde {$minhaClasse->area($_GET['a'])} é o resultado do cálculo formatado com três
casas decimais.");