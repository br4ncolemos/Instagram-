const botao = document.getElementById('btnkk');
const username = document.getElementById('camponome');
const senha = document.getElementById('camposenha');

botao.addEventListener('click', function() {
    const usuario = username.value;
    const senh = senha.value;

    if (usuario === "juanlemos" && senh === "juanl") {
        window.location.href = "index2.html";
    }
});
