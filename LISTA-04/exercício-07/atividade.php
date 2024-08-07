<?php

class MinhaClasse {
    function area($raio) {
        
        return ($raio * $raio) * pi() ;
    }
}

$minhaClasse = new MinhaClasse();
echo("A area do circulo é {$minhaClasse->area($_GET['a'])}");