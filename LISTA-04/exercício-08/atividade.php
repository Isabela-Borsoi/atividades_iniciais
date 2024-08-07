<?php

class MinhaClasse {
    function converteFahrenheitParaCelsius ($temperatura) {
        
        return (($temperatura - 32) * 5) / 9 ;
    }
}

$minhaClasse = new MinhaClasse();
echo(" {$_GET['a']}°F eh equivalente a {$minhaClasse->converteFahrenheitParaCelsius($_GET['a'])} °C");