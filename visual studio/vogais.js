function contarVogais(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var contador = 0;

    palavra = palavra.toLowerCase();

    for (var i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso
var palavra = "elefante";
var quantidadeVogais = contarVogais(palavra);
console.log(`A palavra "${palavra}" possui ${quantidadeVogais} vogais.`);