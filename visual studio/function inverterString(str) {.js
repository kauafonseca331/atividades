function inverterString(str) {
    return str.split('').reverse().join('');
}

// Exemplo de uso
var texto = "Olá, mundo!";
var textoInvertido = inverterString(texto);
console.log("Texto original: " + texto);
console.log("Texto invertido: " + textoInvertido);