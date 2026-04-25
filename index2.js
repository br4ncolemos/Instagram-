const seguir = document.querySelector('.btn-seguir');
const btnCurtir = document.getElementById('btnCurtir');
const contador = document.getElementById('contadorCurtidas');

seguir.addEventListener('click', function() {
    seguir.textContent = "seguindo";
});

let numeroCurtidas = 0;

btnCurtir.addEventListener('click', function() {
    numeroCurtidas++;
    contador.textContent = numeroCurtidas + " curtidas";
});
