function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    if (numero <= 3) {
        return true;
    }
    
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

// Exemplos de uso
var numero1 = 7;
var numero2 = 12;

console.log(numero1 + " é primo? " + verificarPrimo(numero1));
console.log(numero2 + " é primo? " + verificarPrimo(numero2));