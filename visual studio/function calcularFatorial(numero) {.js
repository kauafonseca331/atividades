function calcularFatorial(numero) { 
    if (numero === 0 || numero === 1)
     { return 1; }
     else
         { return numero * calcularFatorial(numero - 1);
        }
     }

// Exemplo de uso
var numero = 6;
var fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}.`);

