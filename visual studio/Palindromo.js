function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    var reversed = palavra.split('').reverse().join('');

    return palavra === reversed;
}

// Exemplos de uso
var palavra1 = "radar";
var palavra2 = "hello";

console.log(`"${palavra1}" é um palíndromo? ${verificarPalindromo(palavra1)}`);
console.log(`"${palavra2}" é um palíndromo? ${verificarPalindromo(palavra2)}`);