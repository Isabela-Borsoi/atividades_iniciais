<?php

class MinhaClasse {
    function area($base, $altura) {
        return $base * $altura / 2;
    }
}

$minhaClasse = new MinhaClasse();
echo("A area do quadrado é {$minhaClasse->area($_GET['a'], $_GET['b'])}");