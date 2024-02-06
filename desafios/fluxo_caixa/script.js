function calcularSaldoFinal() {
    var folhaPagamento = parseFloat(document.getElementById('folhaPagamento').value);
    var impostos= parseFloat(document.getElementById('impostos').value);
    var despesasFixas= parseFloat(document.getElementById('despesasFixas').value);
    var receitas= parseFloat(document.getElementById('receitas').value);
    


    //verificar se os valores sao numeros 
    if (isNaN(folhaPagamento) || isNaN(impostos) ||isNaN(despesasFixas) ||isNaN(receitas)) {
        alert('favor inserir numeros validos');
        return;
    }

    //calcular a soma 

    var resultado = (folhaPagamento + impostos + despesasFixas)
    var resultado = receitas - (folhaPagamento + impostos + despesasFixas)

    //exibir resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}