function encontrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

// Exemplo de uso
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = encontrarNumerosPares(numeros);
console.log("Números pares no array: " + numerosPares.join(', '));