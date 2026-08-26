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
    }
    else{
        let menor = false;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}`);
    return idade;
}

let idade = calcIdade();

alert(`fora da função: idade ${idade}`);