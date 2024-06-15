<?php
// Suponiendo que los puntajes están almacenados en un array
$scores = [
    ['nombre' => 'Juan', 'puntaje' => 100],
    ['nombre' => 'María', 'puntaje' => 80],
    ['nombre' => 'Carlos', 'puntaje' => 120]
];

// Ordenar los puntajes de mayor a menor
usort($scores, function($a, $b) {
    return $b['puntaje'] - $a['puntaje'];
});

// Mostrar los puntajes
echo '<ul>';
foreach ($scores as $score) {
    echo '<li>' . $score['nombre'] . ': ' . $score['puntaje'] . '</li>';
}
echo '</ul>';
?>