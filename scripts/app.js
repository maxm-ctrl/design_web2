var nasc = 1991;
let nome = "pedrina";
const viva = true;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    alert(`dentro de função - idade ${idade}`);
    return idade;
}

let idade = calcIdade();

alert(`fora da função: idade ${idade}`);