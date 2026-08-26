var nasc = 2009;

let nome = "Ângelo";

const viva = true;

function calcIdade(ano = 2026) {

    let idade = ano - nasc;
    let menor;
    let podebeber;

    if (idade < 18) {
        menor = true;
        podebeber = false;

        alert(`${nome} é menor de idade.`);
    } else {
        menor = false;
        podebeber = true;
    }

    alert(`${nome} é menor de idade? ${menor}
Idade: ${idade}
Pode beber? ${podebeber}`);

    return idade;
}

let idade = calcIdade();

alert(`fora da função: idade ${idade}`);