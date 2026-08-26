var nasc = 2009
let nome = "Ângelo";
const viva = true;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    if (idade<18){
        alert(`${nome} é  menor de idade.`)
    }
    if (idade < 18){
        let menor = true;
        var podebeber = false;
    }
    else{
        let menor = false;
        var podebeber = true;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\n Pode beber? ${podebeber}`);
    return idade;
}

let idade = calcIdade();

alert(`fora da função: idade ${idade}`);