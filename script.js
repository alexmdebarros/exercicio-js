document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var numero1 = parseInt(document.getElementById('numero1').value);
        var numero2 = parseInt(document.getElementById('numero2').value);

        if (numero2 > numero1) {
            alert('Formulário válido! Número 2 é maior que o número 1.');
        } else {
            alert('Formulário inválido! Número 2 deve ser maior que o número 1.');
        }
    });
});
