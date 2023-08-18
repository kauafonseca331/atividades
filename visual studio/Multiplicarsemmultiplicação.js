function multiplicacaoSemMultiplicar(a, b) {
    var resultado = 0;

    if (b < 0) {
        a = -a;
        b = -b;
    }

    for (var i = 0; i < b; i++) {
        resultado += a;
    }

    return resultado;
}

// Exemplo de uso
var numero1 = 5;
var numero2 = 3;
var resultado = multiplicacaoSemMultiplicar(numero1, numero2);
console.log(`O resultado da multiplicação de ${numero1} por ${numero2} é ${resultado}.`);