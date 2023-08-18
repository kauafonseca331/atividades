function calcularSomaParesNoIntervalo(inicio, fim) {
    var soma = 0;

    for (var numero = inicio; numero <= fim; numero++) {
        if (numero % 2 === 0) {
            soma += numero;
        }
    }

    return soma;
}

// Exemplo de uso
var inicioIntervalo = 1;
var fimIntervalo = 10;
var somaPares = calcularSomaParesNoIntervalo(inicioIntervalo, fimIntervalo);
console.log(`A soma dos números pares no intervalo de ${inicioIntervalo} a ${fimIntervalo} é ${somaPares}.`);