<?php
class MinhaClasse {
    function buscaMaiorValor($a, $b, $c) {
        return max([$a, $b, $c]);
    }
}

$MinhaClasse = new MinhaClasse();
echo ("O maior valor é {$MinhaClasse->buscaMaiorValor($_GET['a'], $_GET['b'], $_GET['c'])}");