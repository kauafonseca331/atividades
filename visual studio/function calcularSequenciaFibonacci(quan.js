function calcularSequenciaFibonacci(quantidadeTermos) {
    if (quantidadeTermos <= 0) {
        return [];
    } else if (quantidadeTermos === 1) {
        return [0];
    } else if (quantidadeTermos === 2) {
        return [0, 1];
    }

    var fibonacci = [0, 1];
    for (let i = 2; i < quantidadeTermos; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

// Exemplo de uso
var termos = 10;
var sequencia = calcularSequenciaFibonacci(termos);
console.log(`Os primeiros ${termos} termos da sequência de Fibonacci são: ${sequencia.join(', ')}`);