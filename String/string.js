// Função para inverter os caracteres de uma string
function inverterString(str) {
    // Converter a string em um array de caracteres para facilitar a manipulação
    let caracteres = str.split('');

    // Inicializar ponteiros para início e fim da string
    let inicio = 0;
    let fim = caracteres.length - 1;

    // Trocar os caracteres até que os ponteiros se encontrem
    while (inicio < fim) {
        // Trocar os caracteres de posição
        let temp = caracteres[inicio];
        caracteres[inicio] = caracteres[fim];
        caracteres[fim] = temp;

        // Movendo os ponteiros
        inicio++;
        fim--;
    }

    // Reunir os caracteres em uma string novamente
    return caracteres.join('');
}

// Solicitar a entrada do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma string: ', (inputString) => {
    // Inverter a string fornecida pelo usuário
    const stringInvertida = inverterString(inputString);

    // Exibir a string original e a string invertida
    console.log("String original:", inputString);
    console.log("String invertida:", stringInvertida);

    readline.close();
});
