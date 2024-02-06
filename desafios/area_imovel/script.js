function calcularArea() {
    var largura = parseFloat(document.getElementById('largura').value);
    var comprimento = parseFloat(document.getElementById('comprimento').value);

    //verificar se os valores sao numeros 
    if (isNaN(largura) || isNaN(comprimento)) {
        alert('favor inserir numeros validos');
        return;
    }

    //calcular a soma 

    var resultado = largura * comprimento;

    //exibir resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}